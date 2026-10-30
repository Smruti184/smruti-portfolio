import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [error,setError] = useState('')
  function submit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError('Please complete all fields.'); return }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:smrutiranjandash184@gmail.com?subject=${subject}&body=${body}`
  }
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  return <section id="contact" className="section-pad relative overflow-hidden"><div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]"/><div className="container-width relative"><div className="mx-auto max-w-3xl text-center"><SectionHeading eyebrow="06 / CONTACT" title="Have an interesting opportunity?" description="I’d love to connect with developers, data professionals, recruiters, and people building useful technology."/><div className="mb-10 flex flex-wrap justify-center gap-3"><a href="mailto:smrutiranjandash184@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-indigo-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-indigo-300">Email me <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/smruti184/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:border-indigo-300"><Linkedin size={16}/> LinkedIn</a><a href="https://github.com/Smruti184" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:border-indigo-300"><Github size={16}/> GitHub</a></div></div>
    <Reveal className="glass mx-auto max-w-2xl rounded-2xl p-6 md:p-8"><form onSubmit={submit} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2"><label className="block text-left text-xs font-semibold text-slate-300">Your name<input name="name" value={form.name} onChange={update} required maxLength={80} autoComplete="name" placeholder="Name" className="mt-2 w-full rounded-lg border border-line bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600"/></label><label className="block text-left text-xs font-semibold text-slate-300">Email address<input type="email" name="email" value={form.email} onChange={update} required maxLength={120} autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-line bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600"/></label></div><label className="block text-left text-xs font-semibold text-slate-300">Your message<textarea name="message" value={form.message} onChange={update} required maxLength={3000} rows={5} placeholder="Tell me about your project or opportunity…" className="mt-2 w-full resize-y rounded-lg border border-line bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600"/></label>{error && <p role="alert" className="text-left text-xs text-rose-300">{error}</p>}<div className="flex flex-wrap items-center justify-between gap-3"><p className="text-left text-xs text-slate-500">This opens your email app with the message pre-filled.</p><button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-300">Send message <Send size={15}/></button></div></form></Reveal>
    <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500"><span className="inline-flex items-center gap-2"><Mail size={14}/> smrutiranjandash184@gmail.com</span><span className="inline-flex items-center gap-2"><MapPin size={14}/> Bhubaneswar, Odisha, India</span></div>
  </div></section>
}
