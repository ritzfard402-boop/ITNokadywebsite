function StarIcon() {
    return (<svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5Z"/>
    </svg>);
}
export default function TestimonialCard({ quote, name, role }) {
    return (<div className="rounded-2xl bg-brand-cream p-6">
      <div className="flex gap-1 text-brand-red" aria-label="Оценка 5 из 5">
        {Array.from({ length: 5 }).map((_, i) => (<StarIcon key={i}/>))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-brand-ink/80">{quote}</p>

      <div className="mt-5 flex items-center gap-3">
        <span className="h-10 w-10 rounded-full bg-brand-placeholder" aria-hidden="true"/>
        <div>
          <p className="text-sm font-semibold text-brand-ink">{name}</p>
          <p className="text-xs text-brand-muted">{role}</p>
        </div>
      </div>
    </div>);
}
