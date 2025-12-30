import {
  DSHeading,
  DSLinkButton,
  DSText,
} from '@stihl-design-system/components';
import styles from './TwoOneSplit.module.scss';

export default function TwoOneSplit() {
  return (
    <section className={styles.section}>
      <DSHeading tag='h2' size='large-uppercase' className={styles.title}>
        Top Neuheiten
      </DSHeading>
      <div className={styles.content}>
        {/* Consider using srcset, sizes, and/or the <picture> element to optimize your images for all screen sizes and ensure the best performance. */}
        <img
          src='/quickstart-templates/content-image-03.webp'
          alt='Frau mit Akku-Laubbläser im Garten'
          className={styles['first-two-thirds']}
          width={949}
          height={632}
        />
        <div className={styles['one-third']}>
          <DSHeading tag='h2' size='large' className={styles.heading}>
            Der leichteste und gleichzeitig leistungsstärkste Laubbläser den es
            je gab
          </DSHeading>
          <DSText>
            Erlebe die Revolution in der Laubbeseitigung: Der leichteste und
            gleichzeitig leistungsstärkste Laubbläser, den es je gab, setzt neue
            Maßstäbe. Mit seiner beeindruckenden Power entfernst du Laub und
            Schmutz in Rekordzeit – ohne Kompromisse beim Komfort. Das geringe
            Gewicht sorgt für müheloses Arbeiten, selbst bei langen Einsätzen.
            Effizienz, Leistung und Ergonomie vereint in einem Gerät. Entdecke
            jetzt die neue Generation der Laubbläser von STIHL!
          </DSText>
          <div className={styles['link-container']}>
            <DSLinkButton
              href='#'
              iconName='chevron-right'
              iconPosition='right'
              variant='ghost'
              isFlush
            >
              Mehr erfahren
            </DSLinkButton>
            <DSLinkButton
              href='#'
              iconName='chevron-right'
              iconPosition='right'
              variant='ghost'
              isFlush
            >
              Übersicht aller Laubbläser-Modelle
            </DSLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
