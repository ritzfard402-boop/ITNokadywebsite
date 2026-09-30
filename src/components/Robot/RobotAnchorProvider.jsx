import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../animations/gsap"; 
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Robot from "./Robot";

const BASE_WIDTH = 200;
const BASE_HEIGHT = 230;
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
    const currentPoseRef = useRef("neutral");
    const [pose, setPose] = useState("neutral");
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
        let docAnchors = [];
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
        const applyPosition = (centerX, centerY, width, nextPose) => {
            const containerRect = container.getBoundingClientRect();
            const containerLeftDoc = containerRect.left + window.scrollX;
            const containerTopDoc = containerRect.top + window.scrollY;
            const scale = Math.max(width / BASE_WIDTH, 0.001);
            const finalLeft = centerX - (BASE_WIDTH * scale) / 2 - containerLeftDoc;
            const finalTop = centerY - (BASE_HEIGHT * scale) / 2 - containerTopDoc;
            gsap.set(robotEl, { x: finalLeft, y: finalTop, scale });
            if (nextPose !== currentPoseRef.current) {
                currentPoseRef.current = nextPose;
                setPose(nextPose);
            }
        };
        const recalcAnchorProgress = (trigger) => {
            const { start, end } = trigger;
            const span = end - start || 1;
            docAnchors.forEach((anchor) => {
                const idealScrollY = anchor.centerY - window.innerHeight * 0.5;
                anchor.progress = gsap.utils.clamp(0, 1, (idealScrollY - start) / span);
            });
        };
        const applyProgress = (progress) => {
            if (docAnchors.length === 0)
                return;
            const first = docAnchors[0];
            const last = docAnchors[docAnchors.length - 1];
            if (progress <= first.progress) {
                applyPosition(first.centerX, first.centerY, first.width, first.pose);
                return;
            }
            if (progress >= last.progress) {
                applyPosition(last.centerX, last.centerY, last.width, last.pose);
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
                    applyPosition(centerX, centerY, width, t < 0.5 ? prev.pose : next.pose);
                    return;
                }
            }
        };
        const setup = () => {
            docAnchors = buildAnchors();
            if (docAnchors.length === 0)
                return;
            gsap.set(robotEl, { transformOrigin: "0 0" });
            scrollTrigger?.kill();
            scrollTrigger = ScrollTrigger.create({
                trigger: container,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.6,
                onUpdate: (self) => applyProgress(self.progress),
                onRefresh: (self) => {
                    recalcAnchorProgress(self);
                    applyProgress(self.progress);
                },
            });
            recalcAnchorProgress(scrollTrigger);
            applyProgress(scrollTrigger.progress);
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
          <Robot pose={pose} className="h-full w-full drop-shadow-md"/>
        </div>
      </div>
    </RobotAnchorContext.Provider>);
}
