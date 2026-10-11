export const site = {
  name: 'In & Out Gebäudeservice',
  owner: 'Mümin Gündüz',
  phone: '0176 82143976',
  phoneHref: 'tel:+4917682143976',
  email: 'inandout-gebaeudeservice@outlook.de',
  emailHref: 'mailto:inandout-gebaeudeservice@outlook.de',
  address: 'Klosterstr. 7, 44135 Dortmund',
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000').origin,
};

export type ServiceOverviewImage = {
  src: string;
  alt: string;
  position?: string;
};

// Representative overview imagery only. Authentic work examples remain in service-work.ts.
export const services = [
  { slug: 'buero-unterhaltsreinigung', title: 'Büro- & Unterhaltsreinigung', short: 'Regelmäßige Reinigung für Büros und Gewerbeflächen.', detail: 'Saubere Arbeitsbereiche, Besprechungsräume und Sanitärbereiche, abgestimmt auf Ihre Räume und Abläufe.', number: '01', overviewImage: { src: '/images/buero-unterhaltsreinigung.webp', alt: 'KI-generierte Leistungsillustration: Reinigung eines Schreibtischs mit Mikrofasertuch in einem modernen Büro.', position: 'center' } as ServiceOverviewImage | null },
  { slug: 'treppenhausreinigung', title: 'Treppenhausreinigung', short: 'Gepflegte Gemeinschaftsflächen für Mehrfamilienhäuser.', detail: 'Treppen, Flure und Eingangsbereiche bleiben mit einem passenden Reinigungsrhythmus gepflegt.', number: '02', overviewImage: { src: '/images/treppenhausreinigung.webp', alt: 'KI-generierte Leistungsillustration: Wischmopp auf einem gereinigten Steinboden vor einer Treppe.', position: 'center' } as ServiceOverviewImage | null },
  { slug: 'glas-fensterreinigung', title: 'Glas- & Fensterreinigung', short: 'Klare Sicht für Fenster, Schaufenster und Glasflächen.', detail: 'Wir reinigen Glasflächen innen und außen, für private und gewerbliche Objekte.', number: '03', overviewImage: { src: '/images/glas-fensterreinigung.webp', alt: 'KI-generierte Leistungsillustration: Fensterabzieher auf einer eingeschäumten Glasfläche.', position: 'center' } as ServiceOverviewImage | null },
  { slug: 'hausmeisterservice', title: 'Hausmeisterservice & Objektpflege', short: 'Ein verlässlicher Blick auf Haus und Außenanlagen.', detail: 'Objektkontrollen, kleinere Arbeiten und Mülltonnenbereitstellung nach Absprache.', number: '04', overviewImage: { src: '/images/hausmeisterservice-objektpflege.webp', alt: 'KI-generierte Leistungsillustration: Werkzeugkoffer und Leiter am Gebäudeeingang mit Mülltonnen im Hintergrund.', position: '38% center' } as ServiceOverviewImage | null },
  { slug: 'garten-aussenpflege', title: 'Gartenpflege & Winterdienst', short: 'Gepflegte Außenflächen zu jeder Jahreszeit.', detail: 'Rasenpflege, Laubarbeiten und saisonaler Winterdienst nach Absprache, passend zum Objekt.', number: '05', overviewImage: { src: '/images/gartenpflege-winterdienst.webp', alt: 'KI-generierte Leistungsillustration: Gartengeräte und Schubkarre neben einer verschneiten Einfahrt mit Schneeräumgerät.', position: 'center' } as ServiceOverviewImage | null },
  { slug: 'entruempelung', title: 'Entrümpelung', short: 'Platz schaffen in Keller, Wohnung oder Dachboden.', detail: 'Wir besprechen Umfang, Zugang und Abtransport vorab, damit Sie ein passendes Angebot erhalten.', number: '06', overviewImage: { src: '/images/entruempelung.webp', alt: 'KI-generierte Leistungsillustration: eine zugestellte und eine leere Garage nebeneinander.', position: 'center' } as ServiceOverviewImage | null },
] as const;

export type Service = (typeof services)[number];
