import { DSLogo } from '@stihl-design-system/components';
import styles from './TopBar.module.scss';

export function TopBar() {
  return (
    <div className={styles['top-bar']}>
      <div className={styles['top-bar-content']}>
        <DSLogo
          href='/quickstart-templates'
          variant='background'
          className={styles.logo}
        />
      </div>
    </div>
  );
}
