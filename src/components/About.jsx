import { Code2, Database, GraduationCap, BriefcaseBusiness } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const facts = [
  { icon: BriefcaseBusiness, label: 'Current role', value: 'Systems Engineer · TCS' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech · CS & IT' },
  { icon: Code2, label: 'Previous experience', value: 'eClerx · Analyst Apprentice' },
  { icon: Database, label: 'Career direction', value: 'Data Engineering & Python' },
]
export default function About() {
  return <section id="about" className="section-pad border-y border-white/[.05] bg-[#0b1220]">
    <div className="container-width"><SectionHeading eyebrow="01 / ABOUT ME" title="Curiosity that turns into capability." description="A little about my journey, the problems I enjoy solving, and where I want to grow next."/>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <Reveal className="glass rounded-2xl p-7 md:p-9"><p className="leading-8 text-slate-300">I’m a Systems Engineer at Tata Consultancy Services with an academic background in Computer Science and Information Technology. My hands-on experience includes web crawling, product data extraction, Python automation, and working with relational and NoSQL databases.</p><p className="mt-5 leading-8 text-slate-400">I’m especially interested in Data Engineering — building dependable ETL workflows, working with cloud data platforms, and using automation to solve real-world problems. I value continuous learning, collaboration, and writing maintainable solutions.</p></Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{facts.map(({icon:Icon,label,value},i)=><Reveal key={label} delay={i*70} className="glass flex items-center gap-4 rounded-xl p-4"><div className="rounded-lg bg-indigo-400/10 p-3 text-indigo-300"><Icon size={19}/></div><div><p className="text-xs text-slate-500">{label}</p><p className="mt-1 text-sm font-semibold text-slate-200">{value}</p></div></Reveal>)}</div>
      </div>
    </div>
  </section>
}
