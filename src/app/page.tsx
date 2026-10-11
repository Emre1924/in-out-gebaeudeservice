import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone } from '@phosphor-icons/react/ssr';
import heroGebaeudereinigung from '../../public/images/hero-gebaeudereinigung.webp';
import { Cta } from '@/components/cta';
import { ServiceList } from '@/components/service-list';
import { ShaderBackground } from '@/components/ui/adisyon-shader';
import { site } from '@/lib/site';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const principles = [
  'Leistungsumfang passend zum Objekt',
  'Direkter Kontakt für Rückfragen',
  'Einmalige und regelmäßige Einsätze',
];

export default function Home() {
  return (
    <>
      <section className="hero-section relative isolate">
        <div className="hero-atmosphere" aria-hidden="true"><ShaderBackground className="hero-waves" /></div>
        <div className="hero-intro relative isolate pt-10 md:pt-12 lg:pt-14">
          <div className="container-site relative grid gap-7 lg:grid-cols-[1.06fr_.94fr] lg:items-end lg:gap-16">
            <div>
              <p className="hero-enter hero-enter-label eyebrow flex items-center gap-3"><span className="h-px w-8 bg-green" />Gebäudeservice in Dortmund</p>
              <h1 className="hero-enter hero-enter-heading display mt-5 max-w-[720px] text-[clamp(46px,5.2vw,72px)]">Gepflegte Immobilien. Gute Betreuung.</h1>
            </div>
            <div className="lg:pb-1">
              <p className="hero-enter hero-enter-copy max-w-[520px] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">Reinigung und Objektpflege für Unternehmen, Hausverwaltungen und private Eigentümer. Klar abgesprochen und sorgfältig umgesetzt in Dortmund und Umgebung.</p>
              <div className="hero-enter hero-enter-actions hero-actions mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link className="button button-dark" href="/kontakt">Angebot anfordern <ArrowUpRight size={17} /></Link>
                <a className="button button-light hero-phone" href={site.phoneHref}><Phone size={16} />Jetzt anrufen</a>
              </div>
              <p className="hero-enter hero-enter-location mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted"><MapPin size={15} className="text-green" />Vor Ort in Dortmund und Umgebung</p>
            </div>
          </div>
        </div>
        <div className="hero-enter hero-enter-image container-site mt-9 pb-9 md:mt-10 md:pb-12 lg:mt-12 lg:pb-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-[8px] sm:aspect-[16/9] md:aspect-[16/7] md:rounded-[8px] lg:aspect-[3/1]">
            <Image src={heroGebaeudereinigung} alt="Moderner Gebäudeeingang mit frisch gereinigtem, spiegelndem Boden und professioneller Reinigungsausrüstung" fill priority quality={86} sizes="(max-width: 639px) 200vw, (max-width: 767px) 150vw, (max-width: 1023px) 120vw, (max-width: 1279px) calc(100vw - 40px), 1240px" className="object-cover object-right sm:object-[78%_center] md:object-[70%_center] lg:object-center" />
            <div className="absolute bottom-0 left-0 hidden max-w-[330px] rounded-tr-[8px] bg-primary px-8 py-6 text-white md:block">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-white/65">Unser Anspruch</span>
              <p className="mt-2 text-[15px] font-medium leading-6">Ein gepflegtes Objekt beginnt mit verlässlichen Absprachen.</p>
            </div>
          </div>
          <div className="rounded-b-[8px] bg-primary px-6 py-5 text-white md:hidden">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-white/65">Unser Anspruch</span>
            <p className="mt-2 text-[15px] font-medium leading-6">Ein gepflegtes Objekt beginnt mit verlässlichen Absprachen.</p>
          </div>
        </div>
        <div className="hero-meta border-y border-line">
          <div className="container-site grid gap-2.5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-muted sm:grid-cols-3 sm:gap-5 sm:text-center sm:text-[11px]">
            <span>Reinigung und Pflege</span>
            <span>Dortmund und Umgebung</span>
            <span>Privat · Gewerbe · Verwaltung</span>
          </div>
        </div>
      </section>

      <section className="section-pad container-site">
        <div className="mb-9 md:mb-12">
          <div><p className="eyebrow">Unsere Leistungen</p><h2 className="display mt-4 max-w-[750px] text-[clamp(38px,4.6vw,64px)]">Sauberkeit und Pflege, die zum Objekt passen.</h2></div>
        </div>
        <ServiceList limit={6} />
      </section>

      <section className="border-y border-line bg-sand">
        <div className="container-site grid gap-9 py-15 md:py-18 lg:grid-cols-[.86fr_1.14fr] lg:gap-18 lg:py-21">
          <div><p className="eyebrow">Zusammenarbeit</p><h2 className="display mt-4 max-w-[520px] text-[clamp(37px,3.8vw,54px)]">Klare Absprachen. Gepflegte Ergebnisse.</h2><p className="mt-5 max-w-[430px] text-[16px] leading-8 text-muted">Jede Immobilie hat andere Anforderungen. Wir besprechen, was zu tun ist, in welchem Rhythmus und worauf es Ihnen besonders ankommt.</p></div>
          <div className="grid content-center divide-y divide-line border-y border-line">
            {principles.map((principle, index) => <div key={principle} className="flex items-center gap-4 py-4.5 md:py-5"><span className="w-7 shrink-0 font-mono text-xs font-semibold text-green/70">0{index + 1}</span><p className="flex items-center gap-3 text-[15px] font-medium"><Check size={16} className="shrink-0 text-green/75" />{principle}</p></div>)}
            <Link href="/ueber-uns" className="mt-4 inline-flex w-fit items-center gap-2 border-b border-ink pb-2 text-sm font-bold">Mehr über uns <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad container-site">
        <div className="grid gap-9 lg:grid-cols-[.84fr_1.16fr] lg:gap-18">
          <div><p className="eyebrow">Für wen wir arbeiten</p><h2 className="display mt-4 text-[clamp(38px,4vw,58px)]">Passend für Ihren Alltag.</h2><p className="mt-5 max-w-[410px] text-[16px] leading-8 text-muted">Vom einzelnen Auftrag bis zur laufenden Objektpflege: Entscheidend sind Ihre Anforderungen, nicht ein starres Paket.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[8px] border border-line bg-surface p-6 text-white shadow-[0_10px_28px_rgb(44_59_49_/_0.04)] md:p-7 lg:p-8"><span className="font-mono text-[11px] font-semibold uppercase tracking-[.1em] text-accent-contrast">Privatkunden</span><h3 className="mt-5 text-2xl font-medium tracking-[-.03em]">Ein Zuhause, das gut gepflegt ist.</h3><p className="mt-4 text-sm leading-7 text-white/70">Fensterreinigung, Außenpflege oder Entrümpelung. Wir klären mit Ihnen, welche Unterstützung sinnvoll ist.</p></article>
            <article className="rounded-[8px] border border-line bg-surface p-6 text-white shadow-[0_10px_28px_rgb(44_59_49_/_0.04)] md:p-7 lg:p-8"><span className="font-mono text-[11px] font-semibold uppercase tracking-[.1em] text-accent-contrast">Gewerbe und Verwaltung</span><h3 className="mt-5 text-2xl font-medium tracking-[-.03em]">Objekte, die zuverlässig betreut werden.</h3><p className="mt-4 text-sm leading-7 text-white/70">Für Büros, Gewerbeflächen und Mehrfamilienhäuser: Reinigung und Objektpflege nach vereinbartem Umfang.</p></article>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/55">
        <div className="container-site grid gap-6 py-15 md:grid-cols-[1.05fr_.95fr] md:items-start md:gap-12 md:py-18 lg:py-21">
          <div><p className="eyebrow">Regional vor Ort</p><h2 className="display mt-4 max-w-[590px] text-[clamp(37px,3.8vw,54px)]">Aus Dortmund. Für Dortmund und Umgebung.</h2></div>
          <div className="md:pt-7 lg:pl-6"><p className="text-[16px] leading-8 text-muted">Kurze Wege und ein direkter Austausch sind eine gute Basis für die Betreuung Ihrer Immobilie. Teilen Sie uns Ihren Standort mit. Wir prüfen gern, ob Ihr Objekt in unserem Einsatzgebiet liegt.</p><Link href="/einsatzgebiet" className="mt-5 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-bold">Einsatzgebiet ansehen <ArrowRight size={16} /></Link></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
