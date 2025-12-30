import {
  DSHeading,
  DSLinkButton,
  DSText,
} from '@stihl-design-system/components';
import classNames from 'classnames';
import styles from './OneTwoSplit.module.scss';

export default function OneTwoSplit() {
  return (
    <section className={styles.section}>
      {/* Consider using srcset, sizes, and/or the <picture> element to optimize your images for all screen sizes and ensure the best performance. */}
      <img
        src='/quickstart-templates/content-image-013.webp'
        alt='Person hält STIHL Akku in der Hand'
        className={styles['first-third']}
        width={447}
        height={335}
      />
      <div className={styles['two-thirds']}>
        <DSHeading
          tag='h2'
          size='large'
          className={classNames(styles.heading, 'max-text-width')}
        >
          Akku Innovation bei STIHL
        </DSHeading>
        <DSText className='max-text-width'>
          STIHL hebt Akku-Technologie auf ein neues Level: Mehr Leistung,
          längere Laufzeit und maximale Flexibilität für jeden Einsatz. Die
          innovative Akku-Generation kombiniert Power mit intelligenter
          Energieeffizienz – für Profis und anspruchsvolle Anwender. Entdecke,
          wie STIHL die Zukunft des kabellosen Arbeitens neu definiert.
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
            Übersicht aller Akku-Modelle
          </DSLinkButton>
        </div>
      </div>
    </section>
  );
}
