export default function SectionTitle({ eyebrow, title, align = "left", className = "", }) {
    const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
    return (<div className={`flex flex-col gap-2 ${alignment} ${className}`}>
      {eyebrow && (<span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-red">
          {eyebrow}
        </span>)}
      <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">{title}</h2>
    </div>);
}
