import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileCta } from '@/components/mobile-cta';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'In & Out Gebäudeservice | Gebäudereinigung in Dortmund', template: '%s | In & Out Gebäudeservice' },
  description: 'Gebäudereinigung, Objektpflege und Hausmeisterservice in Dortmund und Umgebung. Für Privatkunden, Unternehmen und Hausverwaltungen. Jetzt anfragen.',
  openGraph: { type:'website', locale:'de_DE', siteName:site.name, title:'In & Out Gebäudeservice | Dortmund', description:'Gebäudereinigung und Objektpflege in Dortmund und Umgebung.', images:[{url:'/images/hero-no-people.webp',width:1942,height:809,alt:'Gepflegter Gebäudeeingang mit Glasflächen'}] },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}) { const jsonLd = { '@context':'https://schema.org', '@type':'LocalBusiness', name:site.name, telephone:'+49 176 82143976', email:site.email, address:{'@type':'PostalAddress',streetAddress:'Klosterstr. 7',postalCode:'44135',addressLocality:'Dortmund',addressCountry:'DE'}, areaServed:{'@type':'City',name:'Dortmund'}, ...(site.url.startsWith('https://')?{url:site.url}:{}) }; return <html lang="de"><body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-3">Zum Inhalt springen</a><Header/><main id="main">{children}</main><Footer/><MobileCta/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/></body></html>; }
