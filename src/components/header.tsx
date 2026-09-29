'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { site } from '@/lib/site';

const links = [{ href:'/leistungen', label:'Leistungen' }, { href:'/ueber-uns', label:'Über uns' }, { href:'/einsatzgebiet', label:'Einsatzgebiet' }, { href:'/kontakt', label:'Kontakt' }];

export function Header() {
  const [open,setOpen] = useState(false);
  return <header className="relative z-50 border-b border-[#e5e2d9] bg-[#f7f5ef]">
    <div className="container-site flex h-[76px] items-center justify-between gap-5 lg:h-[88px]">
      <Link href="/" aria-label="In & Out Gebäudeservice, zur Startseite" className="flex items-center gap-3 shrink-0" onClick={()=>setOpen(false)}>
        <span className="grid h-10 w-10 place-items-center border border-[#829588] text-[15px] font-bold tracking-[-.08em] text-green">I/O</span>
        <span className="text-[16px] font-bold leading-[1.05] tracking-[-.035em]">IN & OUT <span className="block text-[10px] font-semibold tracking-[.21em] text-muted">GEBÄUDESERVICE</span></span>
      </Link>
      <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">{links.map(l=><Link key={l.href} className="text-[13px] font-semibold hover:text-green" href={l.href}>{l.label}</Link>)}</nav>
      <div className="hidden items-center gap-4 lg:flex"><a href={site.phoneHref} className="flex items-center gap-2 text-[13px] font-semibold"><Phone size={15}/>{site.phone}</a><Link href="/kontakt" className="button button-dark !min-h-[44px] !px-4 text-[12px]">Angebot anfordern <ArrowUpRight size={15}/></Link></div>
      <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={()=>setOpen(!open)} aria-label={open?'Menü schließen':'Menü öffnen'} aria-expanded={open}>{open?<X size={25}/>:<Menu size={25}/>}</button>
    </div>
    {open && <nav aria-label="Mobile Navigation" className="absolute inset-x-0 top-full border-t border-[#e5e2d9] bg-cream px-5 pb-6 shadow-xl lg:hidden">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block border-b border-[#e5e2d9] py-4 font-semibold">{l.label}</Link>)}<a href={site.phoneHref} className="mt-5 flex items-center gap-2 font-semibold"><Phone size={17}/>{site.phone}</a></nav>}
  </header>;
}
