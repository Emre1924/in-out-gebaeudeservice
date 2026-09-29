import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceList } from '@/components/service-list';
import { Cta } from '@/components/cta';

export const metadata:Metadata = {title:'Leistungen',description:'Gebäudereinigung, Glasreinigung, Treppenhausreinigung, Hausmeisterservice, Gartenpflege und Entrümpelung in Dortmund und Umgebung.'};
export default function Leistungen(){return <><section className="container-site border-b hairline pb-16 pt-18 md:pb-23 md:pt-25"><p className="eyebrow">Leistungen</p><div className="mt-5 grid gap-7 md:grid-cols-[1.25fr_.75fr] md:items-end"><h1 className="display max-w-[770px] text-[clamp(48px,6vw,83px)]">Alles für ein gepflegtes Objekt.</h1><p className="max-w-[430px] text-[17px] leading-8 text-muted">Von der regelmäßigen Reinigung bis zur Pflege von Außenbereichen. Wir stellen den Umfang passend zu Ihrem Bedarf zusammen.</p></div></section><section className="section-pad container-site"><ServiceList/><p className="mt-10 text-sm leading-7 text-muted">Sie haben eine andere Aufgabe rund um Ihre Immobilie? <Link href="/kontakt" className="font-bold text-green underline underline-offset-4">Fragen Sie uns direkt.</Link></p></section><Cta compact/></>}
