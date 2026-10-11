import Link from 'next/link';
import { Phone, ArrowUpRight } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';

export function MobileCta() { return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-cream p-2 shadow-[0_-8px_25px_rgb(44_59_49_/_0.08)] md:hidden"><a className="flex h-12 items-center justify-center gap-2 rounded-[8px] text-sm font-bold" href={site.phoneHref}><Phone size={17}/>Jetzt anrufen</a><Link className="flex h-12 items-center justify-center gap-2 rounded-[8px] bg-primary text-sm font-bold text-white" href="/kontakt">Angebot anfordern<ArrowUpRight size={16}/></Link></div>; }
