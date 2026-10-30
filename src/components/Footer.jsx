import { ArrowUp } from 'lucide-react'
export default function Footer() {
  return <footer className="border-t border-white/[.07] py-7"><div className="container-width flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500"><p>© {new Date().getFullYear()} Smruti Ranjan Dash. All rights reserved.</p><p>Designed with purpose · Built for what’s next.</p><a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">Back to top <ArrowUp size={13}/></a></div></footer>
}
