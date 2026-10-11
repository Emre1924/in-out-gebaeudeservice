import type { Service } from '@/lib/site';

type WorkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type WorkExample = {
  title: string;
  caption?: string;
} & (
  | { kind: 'comparison'; before: WorkImage; after: WorkImage }
  | { kind: 'single'; image: WorkImage }
);

// Derivatives are cropped/compressed copies of the supplied JPEGs, which stay intact.
// No retouching, generated content, or inferred project locations are used.
export const serviceWork: Partial<Record<Service['slug'], WorkExample>> = {
  hausmeisterservice: {
    kind: 'single',
    title: 'Mülltonnenbereitstellung am Objekt.',
    image: {
      src: '/images/einsaetze/hausmeisterservice-muelltonnen-einsatz.webp',
      alt: 'Bereitgestellte Mülltonnen vor einem Wohngebäude',
      width: 900,
      height: 600,
    },
  },
  'buero-unterhaltsreinigung': {
    kind: 'comparison',
    title: 'Bodenreinigung im direkten Vergleich.',
    caption: 'Ein Beispiel aus unserer Arbeit: derselbe Boden vor und nach der Reinigung, aus unterschiedlichen Blickwinkeln aufgenommen.',
    before: {
      src: '/images/einsaetze/bodenreinigung-vorher.webp',
      alt: 'Boden in Holzoptik mit sichtbarem Schmutz vor der Reinigung.',
      width: 1200,
      height: 900,
    },
    after: {
      src: '/images/einsaetze/bodenreinigung-nachher.webp',
      alt: 'Derselbe Boden in Holzoptik nach der Reinigung.',
      width: 1200,
      height: 900,
    },
  },
  entruempelung: {
    kind: 'comparison',
    title: 'Entrümpelung im direkten Vergleich.',
    caption: 'Vorher & Nachher: Das Ergebnis unserer Entrümpelung.',
    before: {
      src: '/images/einsaetze/entruempelung-vorher.webp',
      alt: 'Raum mit Fahrrädern, Kartons und Holzresten vor der Entrümpelung.',
      width: 900,
      height: 800,
    },
    after: {
      // Lower 900 × 800 panel of entruempelung-vorher-nachher.jpeg.
      src: '/images/einsaetze/entruempelung-nachher.webp',
      alt: 'Derselbe Raum mit freier Bodenfläche nach der Entrümpelung; die Wand mit vier Klappen ist wieder zugänglich.',
      width: 900,
      height: 800,
    },
  },
  treppenhausreinigung: {
    kind: 'single',
    title: 'Gepflegter Boden im Treppenhaus.',
    caption: 'Einblick in unsere Treppenhausreinigung: gereinigte Bodenfläche im Flurbereich.',
    image: {
      src: '/images/einsaetze/treppenhausreinigung-boden.webp',
      alt: 'Gereinigter, gesprenkelter Boden im Treppenhaus zwischen blauen Wänden vor einer braunen Tür.',
      width: 1000,
      height: 1333,
    },
  },
};
