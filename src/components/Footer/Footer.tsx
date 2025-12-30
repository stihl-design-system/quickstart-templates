import { DSLink, DSText } from '@stihl-design-system/components';
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
            Unternehmen
          </DSText>
          <nav aria-labelledby='headline-col-1'>
            <ul>
              <li>
                <DSLink href='#'>Über uns</DSLink>
              </li>
              <li>
                <DSLink href='#'>Presse</DSLink>
              </li>
              <li>
                <DSLink href='#'>Karriere</DSLink>
              </li>
              <li>
                <DSLink href='#'>STIHL Markenshop</DSLink>
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
            Online Shop
          </DSText>
          <nav aria-labelledby='headline-col-2'>
            <ul>
              <li>
                <DSLink href='#'>Zahlungsarten</DSLink>
              </li>
              <li>
                <DSLink href='#'>Versand und Lieferung</DSLink>
              </li>
              <li>
                <DSLink href='#'>Retourcenter</DSLink>
              </li>
              <li>
                <DSLink href='#'>Reklamation</DSLink>
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
            Service
          </DSText>
          <nav aria-labelledby='headline-col-3'>
            <ul>
              <li>
                <DSLink href='#'>Häufig gestellte Fragen</DSLink>
              </li>
              <li>
                <DSLink href='#'>Kontakt</DSLink>
              </li>
              <li>
                <DSLink href='#'>Newsletter</DSLink>
              </li>
              <li>
                <DSLink href='#'>Produktsupport</DSLink>
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
            Rechtliches
          </DSText>
          <nav aria-labelledby='headline-col-4'>
            <ul>
              <li>
                <DSLink href='#'>AGB</DSLink>
              </li>
              <li>
                <DSLink href='#'>Datenschutz</DSLink>
              </li>
              <li>
                <DSLink href='#'>Impressum</DSLink>
              </li>
              <li>
                <DSLink href='#'>Cookies</DSLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
