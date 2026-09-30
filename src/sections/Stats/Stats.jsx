import RobotAnchor from "../../components/Robot/RobotAnchor";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { STATS } from "../../constants/stats";
export default function Stats() {
    return (<section id="stats">
      <div className="bg-brand-dark py-12">
        <AnimatedSection className="container-page grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/15" stagger={0.1}>
          {STATS.map(({ icon: Icon, value, label }) => (<div key={label} className="flex flex-col items-center gap-2 px-4 text-center">
              <Icon className="h-7 w-7 text-brand-red"/>
              <span className="text-3xl font-extrabold text-white">{value}</span>
              <span className="text-sm text-white/60">{label}</span>
            </div>))}
        </AnimatedSection>
      </div>

      <div className="container-page flex justify-center py-14">
        <RobotAnchor id="stats" pose="presenting" className="h-44 w-44"/>
      </div>
    </section>);
}
