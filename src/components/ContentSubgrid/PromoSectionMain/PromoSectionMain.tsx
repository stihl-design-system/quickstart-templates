import { DSHeading } from '@stihl-design-system/components';
import styles from './PromoSectionMain.module.scss';
import { DSLinkButton } from '@stihl-design-system/components';

export default function PromoSectionMain() {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.content}>
          <DSHeading tag='h2' size='large-uppercase' className={styles.heading}>
            Analytics scalability making training infrastructure
          </DSHeading>

          <DSLinkButton
            href='#'
            iconName='chevron-right'
            iconPosition='right'
            className={styles.link}
          >
            Link
          </DSLinkButton>
        </div>
      </div>
    </section>
  );
}
