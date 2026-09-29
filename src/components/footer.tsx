import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site';

export function Footer() { return <footer className="bg-[#263a31] text-[#f8f7f1]">
  <div className="container-site grid gap-12 py-17 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20 lg:py-22">
    <div><p className="text-[13px] font-bold tracking-[.2em]">IN & OUT GEBÄUDESERVICE</p><h2 className="display mt-8 max-w-[430px] text-[35px]">Gut gepflegt. Gut aufgehoben.</h2><p className="mt-5 max-w-[370px] text-sm leading-7 text-[#d5ded5]">Gebäudereinigung und Objektpflege für private und gewerbliche Kunden in Dortmund und Umgebung.</p><Link href="/kontakt" className="mt-8 inline-flex items-center gap-2 border-b border-[#a8b9a9] pb-2 text-sm font-semibold">Angebot anfordern <ArrowUpRight size={16}/></Link></div>
    <div><h3 className="text-xs font-bold uppercase tracking-[.18em] text-[#b7c7b8]">Entdecken</h3><div className="mt-7 grid gap-4 text-sm"><Link href="/leistungen">Leistungen</Link><Link href="/ueber-uns">Über uns</Link><Link href="/einsatzgebiet">Einsatzgebiet</Link><Link href="/kontakt">Kontakt</Link></div></div>
    <div><h3 className="text-xs font-bold uppercase tracking-[.18em] text-[#b7c7b8]">Kontakt</h3><div className="mt-7 grid gap-5 text-sm"><a className="flex items-start gap-3" href={site.phoneHref}><Phone size={17} className="shrink-0"/>{site.phone}</a><a className="flex items-start gap-3 break-all" href={site.emailHref}><Mail size={17} className="shrink-0"/>{site.email}</a><p className="flex items-start gap-3"><MapPin size={17} className="shrink-0"/>{site.address}</p></div></div>
  </div>
  <div className="border-t border-white/15"><div className="container-site flex flex-col gap-4 py-6 text-xs text-[#c8d3ca] sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} In & Out Gebäudeservice</span><div className="flex gap-6"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></div></div>
</footer>; }
