import Link from 'next/link';
import { Phone, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

export function MobileCta() { return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[#d4d0c4] bg-cream p-2 shadow-[0_-8px_25px_#252b2712] md:hidden"><a className="flex h-12 items-center justify-center gap-2 text-sm font-bold" href={site.phoneHref}><Phone size={17}/>Jetzt anrufen</a><Link className="flex h-12 items-center justify-center gap-2 bg-green text-sm font-bold text-white" href="/kontakt">Angebot anfordern<ArrowUpRight size={16}/></Link></div>; }
