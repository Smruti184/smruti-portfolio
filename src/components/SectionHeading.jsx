export default function SectionHeading({ eyebrow, title, description }) {
  return <div className="mb-10 max-w-2xl"><p className="eyebrow mb-3">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}</div>
}
