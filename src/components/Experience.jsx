import { BriefcaseBusiness } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const roles = [
  { company: 'Tata Consultancy Services', role: 'Systems Engineer · Digital', period: 'June 2026 — Present', points: ['Completed TCS Initial Learning Program (ILP) training and transitioned into the Systems Engineer – Digital role.','Developing enterprise technology experience while building depth in Python, data engineering, AI, and software development.','Interested in contributing to development and data-focused delivery teams.'] },
  { company: 'eClerx', role: 'Analyst · Apprentice', period: 'November 2025 — June 2026', points: ['Worked on web crawling workflows, including collecting product detail page URLs from SQL databases and extracting product information.','Used Python libraries and browser automation tools including Requests, lxml, BeautifulSoup, and Selenium.','Worked with MongoDB for storing extracted data and proxy services supporting crawling workflows.'] },
]
export default function Experience() {
  return <section id="experience" className="section-pad border-y border-white/[.05] bg-[#0b1220]"><div className="container-width"><SectionHeading eyebrow="03 / EXPERIENCE" title="Learning by doing." description="My professional journey so far."/>
    <div className="relative ml-3 space-y-6 border-l border-indigo-300/25 pl-8">{roles.map((role,i)=><Reveal key={role.company} delay={i*100} className="relative glass rounded-2xl p-6 md:p-8"><span className="absolute -left-[41px] top-8 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#0b1220] bg-indigo-300"/><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">{role.company}</p><h3 className="mt-2 font-display text-xl font-semibold">{role.role}</h3></div><span className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-400">{role.period}</span></div><ul className="mt-5 space-y-3">{role.points.map(point=><li key={point} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"/>{point}</li>)}</ul></Reveal>)}</div>
  </div></section>
}
