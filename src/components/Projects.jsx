import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, ExternalLink, GitFork, Star, RefreshCw } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const featured = [
  { title: 'Automated Product Data Extraction', description: 'Product crawling and extraction workflows using Python, Requests, lxml, Selenium, and proxy APIs, with structured output for downstream storage.', tags: ['Python','Selenium','Requests','lxml'], kind: 'Automation', repo: 'https://github.com/Smruti184' },
  { title: 'Fashion Brand Data Scraper', description: 'A Python web-scraping project using BeautifulSoup to extract and organize product information from fashion websites.', tags: ['Python','BeautifulSoup','Web scraping'], kind: 'Data collection', repo: 'https://github.com/Smruti184' },
  { title: 'Books & IMDb Data Collection', description: 'Practice projects collecting structured book and movie information for data exploration and analysis.', tags: ['Python','Pandas','SQL'], kind: 'Data practice', repo: 'https://github.com/Smruti184' },
]
export default function Projects() {
  const [repos,setRepos] = useState([])
  const [status,setStatus] = useState('loading')
  const [retry,setRetry] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    fetch('https://api.github.com/users/Smruti184/repos?sort=updated&per_page=6', { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then(r => { if (!r.ok) throw new Error('GitHub API unavailable'); return r.json() })
      .then(data => { setRepos(Array.isArray(data) ? data.filter(r => !r.fork).slice(0,6) : []); setStatus('ready') })
      .catch(err => { if (err.name !== 'AbortError') setStatus('error') })
    return () => controller.abort()
  },[retry])
  return <section id="projects" className="section-pad"><div className="container-width"><SectionHeading eyebrow="04 / SELECTED WORK" title="Projects, experiments & practical work." description="A selection of work that reflects my interest in automation, web data, and software development."/>
    <div className="grid gap-4 lg:grid-cols-3">{featured.map((p,i)=><Reveal key={p.title} delay={i*70} className="glass group flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/40"><div className="mb-7 flex items-center justify-between"><span className="rounded-lg bg-indigo-400/10 p-3 text-indigo-300"><Github size={21}/></span><span className="text-[10px] uppercase tracking-widest text-slate-500">{p.kind}</span></div><h3 className="font-display text-lg font-semibold">{p.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-md bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300">{t}</span>)}</div><a href={p.repo} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white">View GitHub profile <ArrowUpRight size={15}/></a></Reveal>)}</div>
    <div className="mt-14 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">GITHUB ACTIVITY</p><h3 className="mt-2 font-display text-2xl font-bold">Recent public repositories</h3></div><a href="https://github.com/Smruti184" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white">All repositories <ExternalLink size={15}/></a></div>
    {status === 'loading' && <p className="mt-5 text-sm text-slate-500">Loading public repositories from GitHub…</p>}
    {status === 'error' && <div className="mt-5 rounded-xl border border-line p-5 text-sm text-slate-400">GitHub repositories could not be loaded right now. <button onClick={()=>{setStatus('loading');setRetry(v=>v+1)}} className="ml-2 inline-flex items-center gap-1 text-indigo-300"><RefreshCw size={13}/> Try again</button></div>}
    {status === 'ready' && repos.length === 0 && <p className="mt-5 text-sm text-slate-500">No public repositories found yet. Visit GitHub to explore the profile.</p>}
    {repos.length > 0 && <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{repos.map(repo=><a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="glass rounded-xl p-4 transition hover:border-indigo-300/40"><div className="flex items-center justify-between gap-2"><h4 className="truncate text-sm font-semibold">{repo.name}</h4><ArrowUpRight size={15} className="shrink-0 text-slate-500"/></div><p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-400">{repo.description || 'Public GitHub repository.'}</p><div className="mt-4 flex gap-4 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><Star size={12}/>{repo.stargazers_count}</span><span className="inline-flex items-center gap-1"><GitFork size={12}/>{repo.forks_count}</span><span>{repo.language || 'Code'}</span></div></a>)}</div>}
  </div></section>
}
