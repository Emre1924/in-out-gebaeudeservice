export const site = {
  name: 'In & Out Gebäudeservice',
  owner: 'Mümin Gündüz',
  phone: '0176 82143976',
  phoneHref: 'tel:+4917682143976',
  email: 'inandout-gebaeudeservice@outlook.de',
  emailHref: 'mailto:inandout-gebaeudeservice@outlook.de',
  address: 'Klosterstr. 7, 44135 Dortmund',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const services = [
  { slug: 'buero-unterhaltsreinigung', title: 'Büro- & Unterhaltsreinigung', short: 'Regelmäßige Reinigung für Büros und Gewerbeflächen.', detail: 'Saubere Arbeitsbereiche, Besprechungsräume und Sanitärbereiche – abgestimmt auf Ihre Räume und Abläufe.', number: '01' },
  { slug: 'treppenhausreinigung', title: 'Treppenhausreinigung', short: 'Gepflegte Gemeinschaftsflächen für Mehrfamilienhäuser.', detail: 'Treppen, Flure und Eingangsbereiche bleiben mit einem passenden Reinigungsrhythmus gepflegt.', number: '02' },
  { slug: 'glas-fensterreinigung', title: 'Glas- & Fensterreinigung', short: 'Klare Sicht für Fenster, Schaufenster und Glasflächen.', detail: 'Wir reinigen Glasflächen innen und außen – für private und gewerbliche Objekte.', number: '03' },
  { slug: 'hausmeisterservice', title: 'Hausmeisterservice & Objektpflege', short: 'Ein verlässlicher Blick auf Haus und Außenanlagen.', detail: 'Objektkontrollen, kleinere Arbeiten und Mülltonnenbereitstellung nach Absprache.', number: '04' },
  { slug: 'garten-aussenpflege', title: 'Gartenpflege & Winterdienst', short: 'Gepflegte Außenflächen zu jeder Jahreszeit.', detail: 'Rasenpflege, Laubarbeiten und saisonaler Winterdienst nach Absprache – passend zum Objekt.', number: '05' },
  { slug: 'entruempelung', title: 'Entrümpelung', short: 'Platz schaffen in Keller, Wohnung oder Dachboden.', detail: 'Wir besprechen Umfang, Zugang und Abtransport vorab, damit Sie ein passendes Angebot erhalten.', number: '06' },
] as const;

export type Service = (typeof services)[number];
