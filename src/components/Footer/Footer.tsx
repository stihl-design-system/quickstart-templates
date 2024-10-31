import { DSHeading, DSLinkStandalone } from '@stihl-design-system/components';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div>
          <DSHeading tag='h4' size='small'>
            Heading 4
          </DSHeading>
          <nav aria-label='Heading 4 #1 Navigation'>
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
          <DSHeading tag='h4' size='small'>
            Heading 4
          </DSHeading>
          <nav aria-label='Heading 4 #2 Navigation'>
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
          <DSHeading tag='h4' size='small'>
            Heading 4
          </DSHeading>
          <nav aria-label='Heading 4 #3 Navigation'>
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
          <DSHeading tag='h4' size='small'>
            Heading 4
          </DSHeading>
          <nav aria-label='Heading 4 #4 Navigation'>
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
