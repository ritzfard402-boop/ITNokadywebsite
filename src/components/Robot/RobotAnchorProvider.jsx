import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../animations/gsap"; 
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Robot from "./Robot";

const BASE_WIDTH = 200;
const BASE_HEIGHT = 230;
const WALK_CYCLE_DISTANCE = 320;
const WALK_MOVE_THRESHOLD = 0.8;
const FOLLOW_SPEED = 720;
const MAX_FRAME_SECONDS = 0.05;
const RobotAnchorContext = createContext(null);
export function useRobotAnchor() {
    const ctx = useContext(RobotAnchorContext);
    if (!ctx) {
        throw new Error("useRobotAnchor должен использоваться внутри RobotAnchorProvider");
    }
    return ctx;
}

export function RobotAnchorProvider({ children }) {
    const containerRef = useRef(null);
    const robotRef = useRef(null);
    const anchorsMapRef = useRef(new Map());
    const walkRef = useRef({ phase: 0, lastX: null, lastY: null, isWalking: false });
    const [isReady, setIsReady] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const registerAnchor = (id, el, anchorPose) => {
        anchorsMapRef.current.set(id, { el, pose: anchorPose });
    };
    const unregisterAnchor = (id) => {
        anchorsMapRef.current.delete(id);
    };
    useEffect(() => {
        const container = containerRef.current;
        const robotEl = robotRef.current;
        if (!container || !robotEl || !isDesktop) {
            setIsReady(false);
            return;
        }
        let scrollTrigger;
        let resizeTimeout;
        let settleFrame = 0;
        let docAnchors = [];
        const setWalk = (swing, bob) => {
            robotEl.style.setProperty("--walk-swing", swing.toFixed(4));
            robotEl.style.setProperty("--walk-bob", bob.toFixed(4));
        };
        const settleWalk = () => {
            cancelAnimationFrame(settleFrame);
            const step = () => {
                const swing = Number.parseFloat(robotEl.style.getPropertyValue("--walk-swing")) || 0;
                const bob = Number.parseFloat(robotEl.style.getPropertyValue("--walk-bob")) || 0;
                if (Math.abs(swing) < 0.02 && bob < 0.02) {
                    setWalk(0, 0);
                    return;
                }
                setWalk(swing * 0.7, bob * 0.7);
                settleFrame = requestAnimationFrame(step);
            };
            settleFrame = requestAnimationFrame(step);
        };
        const updateWalk = (centerX, centerY) => {
            const walk = walkRef.current;
            if (walk.lastX === null) {
                walk.lastX = centerX;
                walk.lastY = centerY;
                return;
            }
            const distance = Math.hypot(centerX - walk.lastX, centerY - walk.lastY);
            walk.lastX = centerX;
            walk.lastY = centerY;
            const isMoving = distance > WALK_MOVE_THRESHOLD;
            if (!isMoving) {
                if (walk.isWalking) {
                    walk.isWalking = false;
                    settleWalk();
                }
                return;
            }
            cancelAnimationFrame(settleFrame);
            walk.isWalking = true;
            walk.phase = (walk.phase + distance / WALK_CYCLE_DISTANCE) % 1;
            const swing = Math.sin(walk.phase * Math.PI * 2);
            const bob = Math.abs(Math.sin(walk.phase * Math.PI * 2));
            setWalk(swing, bob);
        };
        const buildAnchors = () => {
            const entries = Array.from(anchorsMapRef.current.values());
            if (entries.length === 0)
                return [];
            return entries
                .map(({ el, pose: anchorPose }) => {
                const rect = el.getBoundingClientRect();
                return {
                    pose: anchorPose,
                    centerX: rect.left + window.scrollX + rect.width / 2,
                    centerY: rect.top + window.scrollY + rect.height / 2,
                    width: rect.width,
                    progress: 0,
                };
            })
                .sort((a, b) => a.centerY - b.centerY);
        };
        const motion = {
            vx: null,
            vy: null,
            scale: 1,
            targetX: 0,
            targetY: 0,
            targetScale: 1,
            lastTime: 0,
        };
        let followFrame = 0;
        const renderMotion = () => {
            const rect = container.getBoundingClientRect();
            gsap.set(robotEl, {
                x: motion.vx - rect.left,
                y: motion.vy - rect.top,
                scale: motion.scale,
            });
        };
        const stopFollow = () => {
            cancelAnimationFrame(followFrame);
            followFrame = 0;
        };
        const tickFollow = (now) => {
            const dt = Math.min((now - motion.lastTime) / 1000, MAX_FRAME_SECONDS);
            motion.lastTime = now;
            const rect = container.getBoundingClientRect();
            const desiredX = motion.targetX + rect.left;
            const desiredY = motion.targetY + rect.top;
            const dx = desiredX - motion.vx;
            const dy = desiredY - motion.vy;
            const distance = Math.hypot(dx, dy);
            const scaleGap = Math.abs(motion.targetScale - motion.scale);
            if (distance < 0.6 && scaleGap < 0.002) {
                motion.vx = desiredX;
                motion.vy = desiredY;
                motion.scale = motion.targetScale;
                renderMotion();
                updateWalk(motion.vx, motion.vy);
                followFrame = 0;
                return;
            }
            const step = Math.min(distance, FOLLOW_SPEED * dt);
            if (distance > 0) {
                motion.vx += (dx / distance) * step;
                motion.vy += (dy / distance) * step;
            }
            const scaleBlend = distance > 0 ? step / distance : 1;
            motion.scale += (motion.targetScale - motion.scale) * scaleBlend;
            renderMotion();
            updateWalk(motion.vx, motion.vy);
            followFrame = requestAnimationFrame(tickFollow);
        };
        const ensureFollow = () => {
            if (followFrame)
                return;
            motion.lastTime = performance.now();
            followFrame = requestAnimationFrame(tickFollow);
        };
        const applyPosition = (centerX, centerY, width, snap = false) => {
            const containerRect = container.getBoundingClientRect();
            const containerLeftDoc = containerRect.left + window.scrollX;
            const containerTopDoc = containerRect.top + window.scrollY;
            const scale = Math.max(width / BASE_WIDTH, 0.001);
            const finalLeft = centerX - (BASE_WIDTH * scale) / 2 - containerLeftDoc;
            const finalTop = centerY - (BASE_HEIGHT * scale) / 2 - containerTopDoc;
            motion.targetX = finalLeft;
            motion.targetY = finalTop;
            motion.targetScale = scale;
            if (snap || motion.vx === null) {
                stopFollow();
                motion.vx = finalLeft + containerRect.left;
                motion.vy = finalTop + containerRect.top;
                motion.scale = scale;
                renderMotion();
                walkRef.current.lastX = motion.vx;
                walkRef.current.lastY = motion.vy;
                walkRef.current.isWalking = false;
                setWalk(0, 0);
                return;
            }
            renderMotion();
            ensureFollow();
        };
        const recalcAnchorProgress = (trigger) => {
            const { start, end } = trigger;
            const span = end - start || 1;
            docAnchors.forEach((anchor) => {
                const idealScrollY = anchor.centerY - window.innerHeight * 0.5;
                anchor.progress = gsap.utils.clamp(0, 1, (idealScrollY - start) / span);
            });
        };
        const applyProgress = (progress, snap = false) => {
            if (docAnchors.length === 0)
                return;
            const first = docAnchors[0];
            const last = docAnchors[docAnchors.length - 1];
            if (progress <= first.progress) {
                applyPosition(first.centerX, first.centerY, first.width, snap);
                return;
            }
            if (progress >= last.progress) {
                applyPosition(last.centerX, last.centerY, last.width, snap);
                return;
            }
            for (let i = 0; i < docAnchors.length - 1; i += 1) {
                const prev = docAnchors[i];
                const next = docAnchors[i + 1];
                if (progress >= prev.progress && progress <= next.progress) {
                    const span = next.progress - prev.progress || 1;
                    const t = gsap.utils.clamp(0, 1, (progress - prev.progress) / span);
                    const centerX = gsap.utils.interpolate(prev.centerX, next.centerX, t);
                    const centerY = gsap.utils.interpolate(prev.centerY, next.centerY, t);
                    const width = gsap.utils.interpolate(prev.width, next.width, t);
                    applyPosition(centerX, centerY, width, snap);
                    return;
                }
            }
        };
        const setup = () => {
            docAnchors = buildAnchors();
            if (docAnchors.length === 0)
                return;
            stopFollow();
            motion.vx = null;
            gsap.set(robotEl, { transformOrigin: "0 0" });
            scrollTrigger?.kill();
            scrollTrigger = ScrollTrigger.create({
                trigger: container,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => applyProgress(self.progress),
                onRefresh: (self) => {
                    recalcAnchorProgress(self);
                    applyProgress(self.progress, true);
                },
            });
            recalcAnchorProgress(scrollTrigger);
            applyProgress(scrollTrigger.progress, true);
            setIsReady(true);
        };
        const raf = requestAnimationFrame(setup);
        const handleResize = () => {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(() => {
                setup();
                ScrollTrigger.refresh();
            }, 200);
        };
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", setup);
        return () => {
            cancelAnimationFrame(raf);
            cancelAnimationFrame(settleFrame);
            stopFollow();
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", setup);
            window.clearTimeout(resizeTimeout);
            scrollTrigger?.kill();
        };
    }, [isDesktop]);
    return (<RobotAnchorContext.Provider value={{ registerAnchor, unregisterAnchor, isDesktop }}>
      <div ref={containerRef} className="relative">
        {children}

        <div ref={robotRef} className={`pointer-events-none absolute left-0 top-0 z-30 hidden transition-opacity duration-500 lg:block ${isReady ? "opacity-100" : "opacity-0"}`} style={{ width: BASE_WIDTH, height: BASE_HEIGHT }} aria-hidden="true">
          <Robot className="h-full w-full drop-shadow-md"/>
        </div>
      </div>
    </RobotAnchorContext.Provider>);
}
