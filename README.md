# In & Out Gebäudeservice

Öffentlich bereitgestellte Unternehmenswebsite für einen Gebäudeservice aus Dortmund. Sie stellt die Leistungen und das Einsatzgebiet vor und ermöglicht die direkte Kontaktaufnahme für Angebotsanfragen.

**[Live-Website ansehen](https://in-out-gebaeudeservice.netlify.app)** · [GitHub-Repository](https://github.com/Emre1924/in-out-gebaeudeservice)

## Technologien

- **Next.js 15** mit App Router und **React 19**
- **TypeScript** mit aktivierter strikter Typprüfung
- **Tailwind CSS v4** und ergänzende CSS-Regeln
- **Phosphor Icons** für Bedienelemente
- Lokal eingebundene Schriftarten über **Fontsource**
- **WebGL** für den animierten Hero-Hintergrund
- **ESLint**, **npm**, **GitHub** und **Netlify**

## Funktionen

- Responsive Darstellung, mobile Navigation und direkte Telefon- und E-Mail-Links.
- Sechs Leistungen mit bildorientierter Übersicht und beim Build vorgerenderten Detailseiten.
- Repräsentative KI-Bilder in der Leistungsübersicht; davon getrennte echte Einsatzfotos und Vorher-Nachher-Vergleiche auf ausgewählten Detailseiten.
- Kontaktformular, das einen E-Mail-Entwurf in der Anwendung des Besuchers vorbereitet. Der Besucher versendet die Nachricht selbst; es gibt keinen serverseitigen Formularversand.
- Bildauslieferung mit `next/image` und WebP-Dateien; separate optimierte Ableitungen der Unternehmensbilder.
- Seitentitel, Beschreibungen, Canonical-URLs, Open-Graph-Metadaten, Sitemap, `robots.txt` und strukturierte Unternehmensdaten als JSON-LD.
- Hero-Animation mit Unterstützung für `prefers-reduced-motion` und statischem Fallback bei fehlender WebGL-Unterstützung. Der Shader basiert auf dem Waves-Preset des 21st.dev Shader Builders.

## Projektstruktur

```text
src/
├── app/                  # Seiten, Layout, Metadaten und icon.png
├── components/           # Gemeinsame UI, Kontaktformular und Shader
└── lib/
    ├── site.ts           # Unternehmensdaten und Leistungskatalog
    └── service-work.ts   # Einsatzbilder und Vorher-Nachher-Zuordnung
public/images/            # Logo, Hero und Leistungsbilder
└── einsaetze/            # Authentische Projektfotos und Ableitungen
netlify.toml              # Build- und Hosting-Konfiguration
DESIGN.md                 # Visuelle Gestaltungsrichtlinien
AGENTS.md                 # Hinweise zur Mitarbeit
```

Inhalte und Bildzuordnungen werden zentral in `src/lib/` gepflegt. Temporäre Dateien in `work/` und `outputs/` sind von Git ausgeschlossen.

## Lokal installieren und entwickeln

Voraussetzungen: **Node.js 24**, npm und Git.

```bash
git clone https://github.com/Emre1924/in-out-gebaeudeservice.git
cd in-out-gebaeudeservice
npm ci
npm run dev
```

Der Entwicklungsserver startet standardmäßig unter `http://localhost:3000`. Entwicklungsdateien liegen in `.next-dev/`, Produktionsdateien in `.next/`.

Optional kann `.env.example` als `.env.local` kopiert werden. Ohne gesetzte `NEXT_PUBLIC_SITE_URL` verwendet das Projekt lokal `http://localhost:3000` als Basis für Metadaten. Die lokale `.env.local` bleibt außerhalb der Versionsverwaltung.

## Build und Prüfungen

| Befehl | Zweck |
| --- | --- |
| `npm run build` | Produktionsbuild erstellen |
| `npm run typecheck` | TypeScript mit `tsc --noEmit` prüfen |
| `npm run lint` | ESLint mit Next.js- und TypeScript-Regeln ausführen |
| `npm run start` | Den zuvor erstellten Produktionsbuild lokal starten |

Vor der Veröffentlichung werden Build, Typprüfung und Lint ausgeführt. Ein separates automatisiertes Testframework ist derzeit nicht eingerichtet; responsive Darstellung, Navigation und Kontaktablauf werden ergänzend im Browser geprüft.

## Deployment mit GitHub und Netlify

Der Quellcode liegt auf GitHub, die öffentliche Website wird auf Netlify betrieben.

1. Änderungen lokal prüfen.
2. Freigegebene Änderungen committen und nach `main` pushen.
3. Bei aktivierter Git-Anbindung baut Netlify den Stand von `main` und veröffentlicht ihn nach erfolgreichem Deployment.

`netlify.toml` legt **Node.js 24**, den Build-Befehl `npm run build` und das Ausgabeverzeichnis `.next` fest. Die Next.js-Unterstützung übernimmt [Netlifys Next.js-Adapter](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/); das Projekt verwendet keinen statischen Export.

Für den Produktionsbuild wird in Netlify diese öffentliche Variable gesetzt:

```dotenv
NEXT_PUBLIC_SITE_URL=https://in-out-gebaeudeservice.netlify.app
```

Sie bestimmt die Basis für Canonical-URLs, Open Graph, Sitemap und Unternehmensdaten. Bei einem Domainwechsel muss sie angepasst und ein neuer Build ausgelöst werden. Für das aktuelle Kontaktformular sind keine SMTP-Zugangsdaten oder API-Schlüssel erforderlich.

## Projektstatus

Die Website ist öffentlich auf Netlify verfügbar. Impressum und Datenschutzerklärung sind implementiert; die Datenschutzerklärung berücksichtigt das Netlify-Hosting und den tatsächlichen Kontaktablauf. Das Favicon wurde aus dem authentischen Unternehmenslogo erstellt und über die App-Router-Konvention `src/app/icon.png` eingebunden.
