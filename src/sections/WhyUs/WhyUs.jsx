import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/Card/FeatureCard";
import RobotAnchor from "../../components/Robot/RobotAnchor";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { IconCertificate, IconGlobe, IconSupport, IconTeacher, } from "../../assets/icons/MiscIcons";

const FEATURES = [
    { icon: IconGlobe, label: "Практика на реальных проектах" },
    { icon: IconTeacher, label: "Опытные преподаватели-практики" },
    { icon: IconCertificate, label: "Международный сертификат" },
    { icon: IconSupport, label: "Поддержка на каждом этапе обучения" },
];
export default function WhyUs() {
    return (<section id="why-us" className="container-page py-20">
      <SectionTitle eyebrow="Почему мы?" title="Почему выбирают нас" className="mb-12"/>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <AnimatedSection className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-placeholder" y={20}>
          {/* Плейсхолдер под фото с занятий — заменить на реальное изображение */}
        </AnimatedSection>

        <div>
          <AnimatedSection className="flex flex-col gap-4" stagger={0.1}>
            {FEATURES.map((feature) => (<FeatureCard key={feature.label} icon={feature.icon} label={feature.label}/>))}
          </AnimatedSection>

          <div className="mt-10 flex justify-end">
            <RobotAnchor id="why-us" pose="thinking" className="h-40 w-40"/>
          </div>
        </div>
      </div>
    </section>);
}
