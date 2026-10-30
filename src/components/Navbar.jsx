import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-ink/85 backdrop-blur-xl">
    <nav className="container-width flex h-[76px] items-center justify-between" aria-label="Main navigation">
      <a href="#home" className="font-display text-xl font-bold tracking-tight">SRD<span className="text-accent">.</span></a>
      <div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}</div>
      <a href="#contact" className="hidden items-center gap-2 rounded-lg border border-slate-600/70 px-4 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent md:flex">Let's connect <ArrowUpRight size={15}/></a>
      <button className="rounded-lg border border-line p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </nav>
    {open && <div className="container-width border-t border-white/10 py-4 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm text-slate-300">{label}</a>)}</div>}
  </header>
}
