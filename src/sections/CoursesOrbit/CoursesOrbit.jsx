import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RobotAnchor from "../../components/Robot/RobotAnchor";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { ORBIT_COURSES } from "../../constants/courses";
// Радиус орбиты в процентах от контейнера — так раскладка
// остаётся пропорциональной на любом размере экрана.
const ORBIT_RADIUS_PERCENT = 43;
function polarToPercent(angleDeg, radius) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        left: `${50 + radius * Math.sin(rad)}%`,
        top: `${50 - radius * Math.cos(rad)}%`,
    };
}
export default function CoursesOrbit() {
    return (<section id="courses" className="container-page py-20">
      <SectionTitle title="Наши курсы" align="center" className="mx-auto mb-10"/>

      <AnimatedSection className="mx-auto w-full max-w-[680px]" y={24} duration={0.9}>
        <div className="relative aspect-square w-full">
          {/* Место для летающего робота — центр орбиты, не вращается */}
          <RobotAnchor id="courses" pose="orbit" className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2"/>

          {/* Кольцо с иконками медленно вращается вокруг робота;
            каждая иконка внутри контр-вращается, чтобы оставаться прямой. */}
          <div className="orbit-ring absolute inset-0">
            {ORBIT_COURSES.map(({ id, label, icon, angle }) => {
            const position = polarToPercent(angle, ORBIT_RADIUS_PERCENT);
            return (<button key={id} type="button" title={label} aria-label={label} className="group absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white text-brand-red shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]" style={position}>
                  <span className="orbit-counter-spin">
                    <img src={icon} alt="" className="h-8 w-8 object-contain sm:h-9 sm:w-9"/>
                  </span>
                </button>);
        })}
          </div>
        </div>
      </AnimatedSection>

      <p className="mt-8 text-center text-sm text-brand-muted">
        Нажмите на иконку для подробностей
      </p>
    </section>);
}
