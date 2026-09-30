import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RobotAnchor from "../../components/Robot/RobotAnchor";
import TestimonialCard from "../../components/Card/TestimonialCard";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { TESTIMONIALS } from "../../constants/testimonials";
export default function Testimonials() {
    return (<section id="testimonials" className="container-page py-20">
      <SectionTitle eyebrow="Отзывы студентов" title="Что говорят наши студенты?" align="center" className="mx-auto mb-12"/>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.6fr]">
        <div className="flex justify-center">
          <RobotAnchor id="testimonials" pose="wave" className="h-52 w-52"/>
        </div>

        <AnimatedSection className="grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
          {TESTIMONIALS.map((testimonial) => (<TestimonialCard key={testimonial.name + testimonial.role} {...testimonial}/>))}
        </AnimatedSection>
      </div>
    </section>);
}
