import { Award, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Education() {
  return <section id="education" className="section-pad border-y border-white/[.05] bg-[#0b1220]"><div className="container-width"><SectionHeading eyebrow="05 / EDUCATION & CERTIFICATIONS" title="Strong foundations. Continuous learning."/>
    <div className="grid gap-4 lg:grid-cols-2">
      <Reveal className="glass rounded-2xl p-6"><div className="mb-5 flex items-center gap-3 text-indigo-300"><GraduationCap size={22}/><h3 className="font-display text-lg font-semibold text-white">Education</h3></div><div className="space-y-5"><div><p className="font-semibold">B.Tech · Computer Science and Information Technology</p><p className="mt-1 text-sm text-slate-400">GITA Autonomous College, Bhubaneswar · 2025</p></div><div className="h-px bg-line"/><div><p className="font-semibold">Diploma · Electrical Engineering</p><p className="mt-1 text-sm text-slate-400">Government Polytechnic, Bhubaneswar · 2021</p></div></div></Reveal>
      <Reveal delay={100} className="glass rounded-2xl p-6"><div className="mb-5 flex items-center gap-3 text-indigo-300"><Award size={22}/><h3 className="font-display text-lg font-semibold text-white">Certifications & training</h3></div><div className="space-y-5"><div><p className="font-semibold">Databricks Certified Data Analyst Associate</p><p className="mt-1 text-sm text-slate-400">Data analytics and Databricks</p></div><div className="h-px bg-line"/><div><p className="font-semibold">Wipro TalentNext · Java Full Stack</p><p className="mt-1 text-sm text-slate-400">Java, JSP, Servlets, MySQL, HTML, CSS, JavaScript</p></div></div></Reveal>
    </div>
  </div></section>
}
