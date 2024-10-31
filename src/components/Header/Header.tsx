import { DSLogo, DSTitle } from '@stihl-design-system/components';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['top-bar']}>
        <div className={styles['top-bar-content']}>
          <DSLogo
            href='/quickstart-templates'
            variant='background'
            className={styles.logo}
          />
        </div>
      </div>
      <section className={styles['hero']}>
        <div className={styles['hero-image']}>
          <div className={styles['hero-image-title']}>
            {/* <DSHeading tag='h2'>Heading 2</DSHeading> */}
            <DSTitle>Title component</DSTitle>
          </div>
        </div>
      </section>
    </header>
  );
}
