import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceList } from '@/components/service-list';
import { Cta } from '@/components/cta';

export const metadata:Metadata = {alternates:{canonical:'/leistungen'},title:'Leistungen',description:'Gebäudereinigung, Glasreinigung, Treppenhausreinigung, Hausmeisterservice, Gartenpflege und Entrümpelung in Dortmund und Umgebung.'};
export default function Leistungen(){return <><section className="container-site border-b hairline pb-14 pt-15 md:pb-18 md:pt-20"><p className="eyebrow">Leistungen</p><div className="mt-4 grid gap-6 md:grid-cols-[1.25fr_.75fr] md:items-end"><h1 className="display max-w-[760px] text-[clamp(46px,5.5vw,76px)]">Alles für ein gepflegtes Objekt.</h1><p className="max-w-[430px] text-[17px] leading-8 text-muted">Von der regelmäßigen Reinigung bis zur Pflege von Außenbereichen. Wir stellen den Umfang passend zu Ihrem Bedarf zusammen.</p></div></section><section className="section-pad container-site"><ServiceList priorityFirstImage/><p className="mt-8 text-sm leading-7 text-muted">Sie haben eine andere Aufgabe rund um Ihre Immobilie? <Link href="/kontakt" className="font-bold text-green underline underline-offset-4">Fragen Sie uns direkt.</Link></p></section><Cta compact/></>}
