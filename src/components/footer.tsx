import Link from 'next/link';
import { ArrowUpRight, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';

export function Footer() { return <footer className="border-t border-white/15 bg-[var(--green-dark)] text-white">
  <div className="container-site grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16 lg:gap-18 lg:py-18">
    <div><p className="font-mono text-[12px] font-bold tracking-[.14em]">IN & OUT GEBÄUDESERVICE</p><h2 className="display mt-6 max-w-[430px] text-[33px]">Gut gepflegt. Gut aufgehoben.</h2><p className="mt-4 max-w-[370px] text-sm leading-7 text-white/65">Gebäudereinigung und Objektpflege für private und gewerbliche Kunden in Dortmund und Umgebung.</p><Link href="/kontakt" className="mt-6 inline-flex items-center gap-2 border-b border-white pb-2 text-sm font-semibold">Angebot anfordern <ArrowUpRight size={16}/></Link></div>
    <div><h3 className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-accent-contrast">Entdecken</h3><div className="mt-5 grid gap-3.5 text-sm"><Link href="/leistungen">Leistungen</Link><Link href="/ueber-uns">Über uns</Link><Link href="/einsatzgebiet">Einsatzgebiet</Link><Link href="/kontakt">Kontakt</Link></div></div>
    <div><h3 className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-accent-contrast">Kontakt</h3><div className="mt-5 grid gap-4 text-sm"><a className="flex items-start gap-3" href={site.phoneHref}><Phone size={17} className="shrink-0"/>{site.phone}</a><a className="flex items-start gap-3 break-all" href={site.emailHref}><EnvelopeSimple size={17} className="shrink-0"/>{site.email}</a><p className="flex items-start gap-3"><MapPin size={17} className="shrink-0"/>{site.address}</p></div></div>
  </div>
  <div className="border-t border-white/10"><div className="container-site flex flex-col gap-3 py-5 text-xs text-white/55 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} In & Out Gebäudeservice</span><div className="flex gap-6"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></div></div>
</footer>; }
