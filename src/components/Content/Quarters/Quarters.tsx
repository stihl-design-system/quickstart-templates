import styles from './Quarters.module.scss';
import { DSLinkButton } from '@stihl-design-system/components';

export default function Quarters() {
  return (
    <section className={styles.section}>
      <div className={styles['first-quarter']}>
        <img
          src='/quickstart-templates/content-image-08.webp'
          alt='A person prunes a tree branch using orange-handled STIHL pruning shears, with a blurred green landscape in the background.'
          width={328}
          height={186}
          className={styles.image}
        />
        <DSLinkButton
          href='#'
          iconName='chevron-right'
          iconPosition='right'
          variant='ghost'
          size='small'
          isFlush
          className={styles.link}
        >
          Link
        </DSLinkButton>
      </div>
      <div className={styles['quarter']}>
        <img
          src='/quickstart-templates/content-image-09.webp'
          alt='A woman pushes a STIHL lawn mower across a leaf-covered lawn in a garden surrounded by trees during autumn.'
          width={328}
          height={186}
          className={styles.image}
        />
        <DSLinkButton
          href='#'
          iconName='chevron-right'
          iconPosition='right'
          variant='ghost'
          size='small'
          isFlush
          className={styles.link}
        >
          Link
        </DSLinkButton>
      </div>
      <div className={styles['third-quarter']}>
        <img
          src='/quickstart-templates/content-image-010.webp'
          alt='A man wearing hearing protection cuts a large log with a STIHL chainsaw in a backyard filled with chopped firewood.'
          width={328}
          height={186}
          className={styles.image}
        />
        <DSLinkButton
          href='#'
          iconName='chevron-right'
          iconPosition='right'
          variant='ghost'
          size='small'
          isFlush
          className={styles.link}
        >
          Link
        </DSLinkButton>
      </div>
      <div className={styles['quarter']}>
        <img
          src='/quickstart-templates/content-image-011.webp'
          alt='A close-up of a person holding a STIHL HSA 56 hedge trimmer, with focus on the tool and gloves, in a residential garden setting.'
          width={328}
          height={186}
          className={styles.image}
        />
        <DSLinkButton
          href='#'
          iconName='chevron-right'
          iconPosition='right'
          variant='ghost'
          size='small'
          isFlush
          className={styles.link}
        >
          Link
        </DSLinkButton>
      </div>
    </section>
  );
}
