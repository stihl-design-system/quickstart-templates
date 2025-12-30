import { DSHeading, DSLinkCard } from '@stihl-design-system/components';
import styles from './Quarters.module.scss';

export default function Quarters() {
  return (
    <section className={styles.section}>
      <DSHeading tag='h2' size='large-uppercase' className={styles.title}>
        Weitere Themen
      </DSHeading>
      <ul className={styles.list}>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Baumpflege Tipps'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
              variant: 'ghost',
              iconName: 'chevron-right',
            }}
            img={
              <img
                src='/quickstart-templates/content-image-08.webp'
                alt='Baumpflege mit Astschere'
              />
            }
          />
        </li>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Neue Rasenmäher-Generation entdecken'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
              variant: 'ghost',
              iconName: 'chevron-right',
            }}
            img={
              <img
                src='/quickstart-templates/content-image-09.webp'
                alt='Eine Frau mäht ihren Rasen mit einem STIHL Rasenmäher.'
              />
            }
          />
        </li>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Brennholz sägen leicht gemacht'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
              variant: 'ghost',
              iconName: 'chevron-right',
            }}
            img={
              <img
                src='/quickstart-templates/content-image-010.webp'
                alt='Mann sägt Holzstämme im Garten'
              />
            }
          />
        </li>
        <li>
          <DSLinkCard
            href='#'
            className={styles.card}
            heading='Akku-Heckenscheren – flüsterleise'
            decorativeLinkButtonProps={{
              label: 'Mehr erfahren',
              variant: 'ghost',
              iconName: 'chevron-right',
            }}
            img={
              <img
                src='/quickstart-templates/content-image-011.webp'
                alt='Nahaufnahme einer STIHL Heckenschere'
              />
            }
          />
        </li>
      </ul>
    </section>
  );
}
