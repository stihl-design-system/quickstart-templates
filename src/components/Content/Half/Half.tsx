import {
  DSHeading,
  DSLinkButton,
  DSText,
} from '@stihl-design-system/components';
import classNames from 'classnames';
import styles from './Half.module.scss';

export default function Half() {
  return (
    <section className={styles.section}>
      <DSHeading tag='h2' size='large-uppercase' className={styles.title}>
        Themen rund um STIHL
      </DSHeading>
      <div className={styles.content}>
        <div className={styles['first-half']}>
          {/* Consider using srcset, sizes, and/or the <picture> element to optimize your images for all screen sizes and ensure the best performance. */}
          <img
            src='/quickstart-templates/content-image-01.webp'
            alt='Männer in Schutzausrüstung laufen durch einen verschneiten Wald.   '
            width={688}
            height={387}
            className={styles.image}
          />
          <DSHeading
            tag='h2'
            size='large'
            className={classNames(styles.heading, 'max-text-width')}
          >
            Waldarbeiten im Winter
          </DSHeading>
          <DSText className='max-text-width'>
            Waldarbeiten im Winter stellen besondere Herausforderungen dar – von
            eisigen Temperaturen bis hin zu rutschigem Untergrund. Mit der
            robusten Schutz- und Arbeitskleidung von STIHL bist du bestens
            gerüstet: Sie bietet zuverlässigen Schutz, hohen Tragekomfort und
            optimale Bewegungsfreiheit, selbst bei frostigen Bedingungen. So
            kannst du dich voll und ganz auf deine Arbeit konzentrieren –
            sicher, warm und professionell ausgestattet.
          </DSText>
          <DSLinkButton
            href='#'
            iconName='chevron-right'
            iconPosition='right'
            variant='ghost'
            isFlush
            className={styles.link}
          >
            Mehr erfahren
          </DSLinkButton>
        </div>
        <div className={styles['second-half']}>
          {/* Consider using srcset, sizes, and/or the <picture> element to optimize your images for all screen sizes and ensure the best performance. */}
          <img
            src='/quickstart-templates/content-image-02.webp'
            alt='STIHL Akku-Geräte stehen aufgereiht im Garten an einer sauber geschnittenen Hecke.'
            width={688}
            height={387}
            className={styles.image}
          />
          <DSHeading
            tag='h2'
            size='large'
            className={classNames(styles.heading, 'max-text-width')}
          >
            Neue STIHL Akku-Geräte für den perfekten Garten
          </DSHeading>
          <DSText className='max-text-width'>
            Entdecke die neuen STIHL Akku-Geräte für deinen perfekten Garten!
            Leistungsstark, leise und kabellos sorgen sie für maximale
            Flexibilität und Komfort bei der Gartenpflege. Ob Rasenmähen,
            Schneiden oder Trimmen – mit innovativer Akku-Technologie wird jede
            Aufgabe zum Kinderspiel. Mach deinen Garten fit für die Zukunft –
            mit STIHL.
          </DSText>
          <DSLinkButton
            href='#'
            iconName='chevron-right'
            iconPosition='right'
            variant='ghost'
            isFlush
            className={styles.link}
          >
            Mehr erfahren
          </DSLinkButton>
        </div>
      </div>
    </section>
  );
}
