import { DSHeading, DSLinkStandalone } from '@stihl-design-system/components';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className='footer-col'>
          <DSHeading tag='h2'>Heading 2</DSHeading>
          <nav>
            <ul>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer-col'>
          <DSHeading tag='h2'>Heading 2</DSHeading>
          <nav>
            <ul>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
              <li>
                <DSLinkStandalone href='#'>Standalone Link</DSLinkStandalone>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer-col'>
          <DSHeading tag='h2'>Heading 2</DSHeading>
          <nav>
            <ul>
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
