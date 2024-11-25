import { DSTitle } from '@stihl-design-system/components';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero-image']}>
        <div className={styles['hero-image-title']}>
          <DSTitle>Title component</DSTitle>
        </div>
      </div>
    </section>
  );
}
