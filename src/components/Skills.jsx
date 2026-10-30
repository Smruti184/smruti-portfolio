import { Braces, Database, Globe, Workflow, Cloud, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const groups = [
  { icon: Braces, title: 'Programming', skills: ['Python','Java','JavaScript','OOP'] },
  { icon: Database, title: 'Data & databases', skills: ['MySQL','MongoDB','Pandas','ETL fundamentals'] },
  { icon: Workflow, title: 'Automation & scraping', skills: ['Requests','BeautifulSoup','lxml','Selenium','Playwright'] },
  { icon: Globe, title: 'Web technologies', skills: ['HTML','CSS','Bootstrap','REST APIs'] },
  { icon: Cloud, title: 'Data platforms', skills: ['Databricks','Azure (learning)','Data analytics'] },
  { icon: Wrench, title: 'Developer tools', skills: ['Git','VS Code','Eclipse','Jupyter'] },
]
export default function Skills() {
  return <section id="skills" className="section-pad"><div className="container-width"><SectionHeading eyebrow="02 / TECHNICAL TOOLKIT" title="Tools for building and moving data." description="A practical foundation across programming, web automation, databases, and data platforms."/>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{groups.map(({icon:Icon,title,skills},i)=><Reveal key={title} delay={i*65} className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/40"><div className="mb-5 inline-flex rounded-xl bg-indigo-400/10 p-3 text-indigo-300"><Icon size={21}/></div><h3 className="font-display text-lg font-semibold">{title}</h3><div className="mt-4 flex flex-wrap gap-2">{skills.map(skill=><span key={skill} className="rounded-md border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300">{skill}</span>)}</div></Reveal>)}</div>
  </div></section>
}
