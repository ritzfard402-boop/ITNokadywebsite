import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../animations/gsap";
/**
 * Анимирует прямых детей контейнера (fade-in + slide-up) один раз,
 * когда контейнер входит в viewport. Если детей нет — анимирует сам
 * элемент. Используется через <AnimatedSection>.
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const { y = 32, stagger = 0.12, duration = 0.8, start = "top 85%" } = options;
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const targets = el.children.length > 0 ? Array.from(el.children) : [el];
        const ctx = gsap.context(() => {
            gsap.from(targets, {
                opacity: 0,
                y,
                duration,
                stagger,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: "play none none none",
                },
            });
        }, el);
        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((st) => {
                if (st.trigger === el)
                    st.kill();
            });
        };
    }, [y, stagger, duration, start]);
    return ref;
}
