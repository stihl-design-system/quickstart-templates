import { DSLinkCard } from '@stihl-design-system/components';
import styles from './Thirds.module.scss';

export default function Thirds() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Parkanlagenpflege leicht gemacht mit STIHL'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
            }}
            flags={['Parks & Landschaft', 'Gartenpflege']}
            flagListAriaLabel='Zugehörige Themen'
            description='Mit STIHL wird die Pflege von Grünflächen zum Kinderspiel: leistungsstarke Geräte, ergonomisches Design und innovative Technologien sorgen für effizientes Arbeiten. Ob Rasen, Hecken oder Wege – STIHL bietet die passenden Lösungen für jede Herausforderung. So bleibt Ihre Parkanlage nicht nur gepflegt, sondern auch ein echter Blickfang.'
            img={
              <img
                src='/quickstart-templates/content-image-04.webp'
                alt='Garten-Landschaftsbauer mit beladenem Pick-Up-Truck im Park.'
              />
            }
          />
        </li>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Verwilderter Garten – Was tun?'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
            }}
            flags={['Freischneider', 'Gartenpflege']}
            flagListAriaLabel='Zugehörige Themen'
            description='Ein verwilderter Garten kann zur echten Herausforderung werden – besonders am Hang. Mit dem STIHL Freischneider bringst du Ordnung ins Grün und meisterst selbst schwieriges Gelände mühelos. Seine starke Leistung und präzise Handhabung machen das Arbeiten effizient und komfortabel. So wird aus Wildwuchs wieder ein gepflegter Garten – ganz ohne Kompromisse.'
            img={
              <img
                src='/quickstart-templates/content-image-06.webp'
                alt='Mann mit Freischneider bei der Arbeit'
              />
            }
          />
        </li>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Neue Ketten- und Schieneninnovation von STIHL'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
            }}
            flags={['Kettensägen', 'Profis']}
            flagListAriaLabel='Zugehörige Themen'
            description='Entdecke die Zukunft der Schneidleistung: STIHL präsentiert die neueste Ketten- und Schieneninnovation für maximale Effizienz und Präzision. Mit optimierter Technologie für längere Standzeiten und weniger Wartung setzt STIHL neue Maßstäbe. Erlebe spürbar mehr Komfort und Kontrolle bei jedem Schnitt. Die perfekte Kombination für Profis und anspruchsvolle Anwender – jetzt verfügbar!'
            img={
              <img
                src='/quickstart-templates/content-image-05.webp'
                alt='Motorsägenkette und Schiene liegen auf einem Baumstumpf im Wald.'
              />
            }
          />
        </li>
      </ul>
    </section>
  );
}
