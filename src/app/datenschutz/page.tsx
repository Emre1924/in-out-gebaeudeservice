import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/datenschutz' },
  title: 'Datenschutz',
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <article className="container-site max-w-[820px] py-15 md:py-20">
      <p className="eyebrow">Rechtliches</p>
      <h1 className="display mt-4 text-[clamp(46px,4.7vw,64px)]">Datenschutz</h1>
      <div className="mt-10 space-y-9 text-[15px] leading-8">
        <section>
          <h2 className="mb-3 text-xl font-semibold">Verantwortlicher</h2>
          <p>
            {site.name}, Inhaber {site.owner}<br />
            {site.address}<br />
            E-Mail: <a className="underline" href={site.emailHref}>{site.email}</a><br />
            Telefon: <a className="underline" href={site.phoneHref}>{site.phone}</a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Hosting und technische Anfragedaten</h2>
          <p>
            Unsere Website unter in-out-gebaeudeservice.netlify.app wird bei Netlify
            gehostet. Anbieter ist Netlify, Inc., 101 2nd Street, San Francisco,
            CA 94105, USA. Netlify stellt die Website über ein verteiltes
            Auslieferungsnetzwerk bereit und verarbeitet dabei technische Anfragedaten.
          </p>
          <p className="mt-3">
            Beim Aufruf werden insbesondere die IP-Adresse, Datum und Uhrzeit,
            angeforderte Seiten oder Dateien, Statuscodes, übertragene Datenmengen,
            Browser- und Betriebssysteminformationen sowie die zuvor besuchte Seite
            übermittelt, soweit Ihr Browser diese Angaben mitsendet. Dies gilt auch
            für das Laden von Bildern, Schriftarten und Skripten sowie die Navigation
            zwischen Seiten. Solche Daten können in Zugriffs- und Fehlerprotokollen
            erfasst werden.
          </p>
          <p className="mt-3">
            Die Verarbeitung dient der Auslieferung der Website, der Überwachung
            ihrer Verfügbarkeit und Leistung, der Fehlerbehebung und dem Schutz vor
            missbräuchlichen Zugriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            Unser berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb
            unseres Internetauftritts.
          </p>
          <p className="mt-3">
            Empfänger der Hostingdaten sind Netlify und die zur Bereitstellung
            eingesetzten Unterauftragsverarbeiter. Soweit Netlify Daten in unserem
            Auftrag verarbeitet, regelt Netlifys Vereinbarung zur Auftragsverarbeitung
            (Data Processing Agreement, DPA) diese Verarbeitung. Die Speicherdauer
            technischer Protokolle richtet sich nach ihrem Zweck, den maßgeblichen
            Löschfristen beim Hostinganbieter und gesetzlichen Anforderungen.
          </p>
          <p className="mt-3">
            Weitere Informationen finden Sie in{' '}
            <a className="underline" href="https://www.netlify.com/privacy/">Netlifys Datenschutzhinweisen</a>
            {' '}und in der{' '}
            <a className="underline" href="https://www.netlify.com/pdf/netlify-dpa.pdf">Vereinbarung zur Auftragsverarbeitung</a>.
            Die Verbindung zu unserer Website ist über HTTPS verschlüsselt.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Verarbeitung außerhalb der EU und des EWR</h2>
          <p>
            Im Rahmen des Netlify-Hostings können personenbezogene Daten auch in den
            USA oder anderen Ländern außerhalb der Europäischen Union und des
            Europäischen Wirtschaftsraums verarbeitet werden. Dort können andere
            Datenschutzstandards gelten.
          </p>
          <p className="mt-3">
            Netlify nennt in seiner DPA für erfasste Übermittlungen in die USA das
            EU-U.S. Data Privacy Framework als Grundlage. Soweit dieses nicht
            anwendbar ist, sieht die DPA EU-Standardvertragsklauseln vor.
            Diese Übermittlungsgrundlagen richten sich nach Art. 45 bzw. Art. 46 DSGVO.
            Angaben zu den Garantien und Unterauftragsverarbeitern sind in der oben
            verlinkten DPA enthalten. Eine Kopie der für die Verarbeitung Ihrer Daten
            maßgeblichen Garantien können Sie über unsere Kontaktdaten anfordern.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Kontakt per E-Mail und Telefon</h2>
          <p>
            Wenn Sie uns kontaktieren, verarbeiten wir Ihre Kontaktdaten und den
            Inhalt Ihrer Anfrage, um diese zu beantworten und Leistungen mit Ihnen
            abzustimmen. Dazu können Ihr Name, Ihre E-Mail-Adresse, Telefonnummer,
            Angaben zum Objekt und gewünschte Leistungen gehören. Die Bereitstellung
            ist freiwillig; ohne die für eine Antwort notwendigen Angaben können wir
            Ihre Anfrage unter Umständen nicht bearbeiten.
          </p>
          <p className="mt-3">
            Bei Anfragen zu einem Angebot oder Vertrag ist Art. 6 Abs. 1 lit. b DSGVO
            die Rechtsgrundlage. Sonstige Anfragen bearbeiten wir auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist die Beantwortung
            Ihrer Anliegen. Soweit gesetzliche Aufbewahrungspflichten bestehen,
            erfolgt die weitere Speicherung auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
          </p>
          <p className="mt-3">
            Das Kontaktformular bereitet mit „E-Mail vorbereiten“ eine Nachricht in
            Ihrem eigenen E-Mail-Programm vor. Die Eingaben werden dafür im Browser
            verarbeitet und an dieses Programm übergeben. Erst wenn Sie die Nachricht
            dort selbst versenden, erhalten wir sie. Das Formular übermittelt die
            Eingaben nicht an Netlify oder eine Formular-API und speichert sie nicht
            in einer Website-Datenbank. Die Telefonlinks öffnen die Anruffunktion
            Ihres Geräts; die Website führt selbst kein Telefonat.
          </p>
          <p className="mt-3">
            Unsere veröffentlichte E-Mail-Adresse ist ein Outlook-Postfach von
            Microsoft. Beim Versand und Empfang werden Nachrichteninhalte und
            Verbindungsdaten durch die beteiligten E-Mail-Anbieter verarbeitet.
            Microsoft nennt für den EWR Microsoft Ireland Operations Limited,
            One Microsoft Place, South County Business Park, Leopardstown,
            Dublin 18, Irland. Dabei kann eine Verarbeitung auch außerhalb der
            EU und des EWR stattfinden. Microsoft beschreibt hierfür insbesondere
            das EU-U.S. Data Privacy Framework und EU-Standardvertragsklauseln in
            seinen{' '}
            <a className="underline" href="https://www.microsoft.com/de-de/privacy/privacystatement">Datenschutzbestimmungen</a>.
            Durch den bloßen Besuch unserer Website wird keine Verbindung zu
            Microsoft hergestellt.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Cookies, Browser-Speicher und eingebundene Inhalte</h2>
          <p>
            Die Website setzt keine eigenen Cookies und speichert keine Besucherdaten
            in Local Storage oder Session Storage. Eingaben im Kontaktformular werden
            im geöffneten Formular verarbeitet und für den E-Mail-Entwurf verwendet;
            Ihr Browser kann unabhängig davon eigene Funktionen wie Autofill nutzen.
          </p>
          <p className="mt-3">
            Wir binden keine Analyse-, Marketing- oder Tracking-Skripte ein. Die
            technische Verarbeitung von Anfragen durch den Hostinganbieter, wie oben
            beschrieben, bleibt hiervon unberührt. Schriftarten, Bilder, Icons und
            Skripte werden über unsere Website ausgeliefert; es werden keine externen
            Schriftartenserver, Karten, Videos oder Social-Media-Inhalte eingebunden.
            Der animierte Hintergrund wird auf Ihrem Gerät berechnet und übermittelt
            keine Daten an einen externen Animationsdienst.
          </p>
          <p className="mt-3">
            Externe Informationslinks, etwa zu den Datenschutzangaben der Anbieter,
            laden die verlinkten Websites erst beim Anklicken. Für die dortige
            Datenverarbeitung sind die jeweiligen Anbieter verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Speicherung von Anfragen</h2>
          <p>
            Wir speichern personenbezogene Daten aus Anfragen nur so lange, wie sie
            für die Bearbeitung, eine anschließende Vertragsabwicklung oder die
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich
            sind. Gesetzliche Aufbewahrungspflichten können eine längere Speicherung
            verlangen. Entfallen diese Zwecke und Pflichten, werden die Daten gelöscht.
            Die Dauer hängt daher vom Inhalt und Verlauf Ihrer Anfrage sowie den
            einschlägigen gesetzlichen Vorgaben ab.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Ihre Rechte</h2>
          <p>
            Unter den gesetzlichen Voraussetzungen haben Sie Rechte auf Auskunft
            (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung
            der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Soweit eine
            Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit
            Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3).
          </p>
          <p className="mt-3">
            Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
            einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO widersprechen
            (Art. 21 DSGVO). Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{' '}
            <a className="underline" href={site.emailHref}>{site.email}</a>
            {' '}oder an die oben genannte Postanschrift.
          </p>
          <p className="mt-3">
            Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde
            zu beschweren (Art. 77 DSGVO), insbesondere am Ort Ihres gewöhnlichen
            Aufenthalts, Ihres Arbeitsplatzes oder des vermuteten Verstoßes.
            Für unseren Standort ist die{' '}
            <a className="underline" href="https://www.ldi.nrw.de/">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</a>
            {' '}zuständig.
          </p>
        </section>
      </div>
    </article>
  );
}
