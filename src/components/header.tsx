'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, List, Phone, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { site } from '@/lib/site';
import companyLogo from '../../public/images/in-out-gebaeudeservice-logo-header.webp';

const links = [{ href:'/leistungen', label:'Leistungen' }, { href:'/ueber-uns', label:'Über uns' }, { href:'/einsatzgebiet', label:'Einsatzgebiet' }, { href:'/kontakt', label:'Kontakt' }];

export function Header() {
  const [open,setOpen] = useState(false);
  return <header className="site-header sticky top-0 z-50 border-b border-line">
    <div className="container-site flex h-[76px] items-center justify-between gap-3 lg:h-[88px] lg:gap-5">
      <Link href="/" aria-label="In & Out Gebäudeservice, zur Startseite" className="flex shrink-0 items-center lg:w-[190px]" onClick={()=>setOpen(false)}>
        <Image src={companyLogo} alt="In & Out Gebäudeservice" className="h-[60px] w-auto lg:h-[72px]" sizes="(min-width: 1024px) 101px, 85px" priority quality={86} />
      </Link>
      <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">{links.map(l=><Link key={l.href} className="text-[13px] font-semibold hover:text-green" href={l.href}>{l.label}</Link>)}</nav>
      <div className="flex shrink-0 items-center gap-2 lg:gap-4">
        <a href={site.phoneHref} className="header-phone hidden items-center gap-2 whitespace-nowrap text-[13px] font-semibold lg:flex"><Phone size={16} />{site.phone}</a>
        <Link href="/kontakt" onClick={()=>setOpen(false)} className="button button-dark !min-h-[42px] !px-3 !text-[11px] sm:!text-xs lg:!min-h-[44px] lg:!px-4">Angebot anfordern <ArrowUpRight className="hidden sm:block" size={15}/></Link>
        <button className="grid h-11 w-11 shrink-0 place-items-center lg:hidden" onClick={()=>setOpen(!open)} aria-label={open?'Menü schließen':'Menü öffnen'} aria-expanded={open}>{open?<X size={25}/>:<List size={25}/>}</button>
      </div>
    </div>
    {open && <nav aria-label="Mobile Navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-cream px-5 pb-6 shadow-[0_18px_40px_rgb(44_59_49_/_0.08)] lg:hidden">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block border-b border-line py-4 font-semibold">{l.label}</Link>)}<a href={site.phoneHref} onClick={()=>setOpen(false)} className="header-phone mt-5 flex min-h-11 items-center gap-2 font-semibold"><Phone size={18} />{site.phone}</a></nav>}
  </header>;
}
