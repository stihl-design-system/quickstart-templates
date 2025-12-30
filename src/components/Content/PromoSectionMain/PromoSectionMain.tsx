import { DSHeading, DSLinkButton } from '@stihl-design-system/components';
import styles from './PromoSectionMain.module.scss';

export default function PromoSectionMain() {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.content}>
          <DSHeading tag='h2' size='large-uppercase' className={styles.heading}>
            Newsletteranmeldung – Spare 20% bei deinem nächsten Einkauf
          </DSHeading>

          <DSLinkButton
            href='#'
            iconName='chevron-right'
            iconPosition='right'
            className={styles.link}
          >
            Jetzt anmelden
          </DSLinkButton>
        </div>
      </div>
    </section>
  );
}
