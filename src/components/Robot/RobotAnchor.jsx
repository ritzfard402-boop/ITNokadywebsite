import { useEffect, useRef } from "react";
import { useRobotAnchor } from "./RobotAnchorProvider";
import Robot from "./Robot";
// На десктопе (>=1024px) это невидимый маркер: его размер и позиция
// определяют, куда должен переместиться единый летающий робот
// (см. RobotAnchorProvider). На планшете/мобильном летающий робот
// отключён — вместо этого компонент сам рисует статичную иллюстрацию
// в потоке страницы, повторяя исходную раскладку макета.
export default function RobotAnchor({ id, pose, className = "" }) {
    const ref = useRef(null);
    const { registerAnchor, unregisterAnchor, isDesktop } = useRobotAnchor();
    useEffect(() => {
        if (!isDesktop)
            return;
        const el = ref.current;
        if (!el)
            return;
        registerAnchor(id, el, pose);
        return () => unregisterAnchor(id);
    }, [id, pose, isDesktop, registerAnchor, unregisterAnchor]);
    if (!isDesktop) {
        return <Robot pose={pose} className={className}/>;
    }
    return <div ref={ref} className={`invisible ${className}`} aria-hidden="true"/>;
}
