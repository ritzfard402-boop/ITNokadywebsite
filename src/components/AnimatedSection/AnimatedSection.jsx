import { useScrollReveal } from "../../hooks/useScrollReveal";
// Обёртка для scroll-reveal: прямые дети плавно появляются
// (fade + slide-up) со сдвигом по времени, когда блок входит
// в viewport. Не запускается повторно при обратном скролле.
export default function AnimatedSection({ children, className = "", y, stagger, duration, as = "div", }) {
    const ref = useScrollReveal({ y, stagger, duration });
    const Tag = as;
    return (<Tag ref={ref} className={className}>
      {children}
    </Tag>);
}
