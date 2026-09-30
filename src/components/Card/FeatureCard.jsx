export default function FeatureCard({ icon: Icon, label }) {
    return (<div className="flex items-center gap-4 rounded-2xl border border-brand-red/30 bg-white px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
        <Icon className="h-5 w-5"/>
      </span>
      <p className="text-base font-semibold text-brand-ink">{label}</p>
    </div>);
}
