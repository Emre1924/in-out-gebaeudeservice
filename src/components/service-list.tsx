import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/site';

export function ServiceList({limit}:{limit?:number}) { return <div className="border-t hairline">{services.slice(0,limit).map(service=><Link key={service.slug} href={`/leistungen/${service.slug}`} className="service-row grid grid-cols-[42px_1fr_25px] items-center gap-3 border-b hairline py-6 md:grid-cols-[70px_1fr_1.1fr_25px] md:gap-6 md:py-8"><span className="text-xs font-semibold text-[#8b948a]">{service.number}</span><h3 className="font-medium tracking-[-.04em] text-[clamp(20px,2.25vw,29px)]">{service.title}</h3><p className="hidden max-w-[320px] text-sm leading-6 text-muted md:block">{service.short}</p><ArrowUpRight className="service-arrow text-green" size={21}/></Link>)}</div>; }
