import { DSText, DSLinkStandalone } from '@stihl-design-system/components';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div>
          <DSText
            className={styles.headline}
            weight='bold'
            size='medium'
            id='headline-col-1'
          >
            Heading 1
          </DSText>
          <nav aria-labelledby='headline-col-1'>
            <ul>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <DSText
            className={styles.headline}
            weight='bold'
            size='medium'
            id='headline-col-2'
          >
            Heading 2
          </DSText>
          <nav aria-labelledby='headline-col-2'>
            <ul>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <DSText
            className={styles.headline}
            weight='bold'
            size='medium'
            id='headline-col-3'
          >
            Heading 3
          </DSText>
          <nav aria-labelledby='headline-col-3'>
            <ul>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <DSText
            className={styles.headline}
            weight='bold'
            size='medium'
            id='headline-col-4'
          >
            Heading 4
          </DSText>
          <nav aria-labelledby='headline-col-4'>
            <ul>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
