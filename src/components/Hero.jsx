import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

export default function Hero() {
  return <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-36">
    <div className="grid-bg absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"/>
    <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-indigo-600/15 blur-[120px]"/>
    <div className="container-width relative grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
      <Reveal>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[.06] px-4 py-2 text-xs text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-300"/> Systems Engineer · TCS Digital</div>
        <p className="eyebrow mb-5">HELLO, I'M SMRUTI RANJAN DASH</p>
        <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-[-.065em] sm:text-6xl lg:text-[76px]">Building with<br/><span className="gradient-text">data & code.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">I’m a technology professional focused on Python development, data engineering, automation, and AI-driven solutions. I enjoy turning complex data workflows into practical, reliable systems.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-300">Explore my work <ArrowUpRight size={16}/></a>
          <a href="/resume.pdf" download className="rounded-lg border border-slate-600/80 px-5 py-3 text-sm font-semibold transition hover:border-indigo-300 hover:text-indigo-200">Download résumé</a>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2"><MapPin size={15}/> Bhubaneswar, India</span>
          <a className="transition hover:text-white" href="https://github.com/Smruti184" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
          <a className="transition hover:text-white" href="https://www.linkedin.com/in/smruti184/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
        </div>
      </Reveal>
      <Reveal delay={150} className="hidden lg:block">
        <div className="float relative mx-auto flex aspect-square max-w-[370px] items-center justify-center rounded-full border border-indigo-300/20 bg-[radial-gradient(circle_at_50%_40%,rgba(112,132,245,.28),rgba(20,31,58,.25)_48%,transparent_70%)] shadow-glow">
          <div className="absolute inset-8 rounded-full border border-dashed border-indigo-300/20"/>
          <div className="flex h-48 w-48 items-center justify-center rounded-[2.5rem] border border-indigo-200/20 bg-slate-900/80 shadow-2xl"><span className="font-display text-6xl font-bold tracking-[-.08em]">SRD<span className="text-indigo-300">.</span></span></div>
          <div className="absolute -right-2 top-16 rounded-xl border border-line bg-panel px-4 py-3 shadow-xl"><Sparkles className="mb-1 text-indigo-300" size={17}/><span className="text-xs text-slate-300">Always learning</span></div>
          <div className="absolute -bottom-2 -left-5 rounded-xl border border-line bg-panel px-4 py-3 shadow-xl"><span className="text-xs text-slate-400">Focus</span><p className="text-sm font-semibold">Python · Data · AI</p></div>
        </div>
      </Reveal>
    </div>
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-white" aria-label="Scroll to about"><ArrowDown size={19}/></a>
  </section>
}
