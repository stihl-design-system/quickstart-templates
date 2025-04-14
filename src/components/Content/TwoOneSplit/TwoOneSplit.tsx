import { DSHeading } from '@stihl-design-system/components';
import styles from './TwoOneSplit.module.scss';
import { DSText } from '@stihl-design-system/components';
import { DSLinkButton } from '@stihl-design-system/components';

export default function TwoOneSplit() {
  return (
    <section className={styles.section}>
      {/* Consider using srcset, sizes, and/or the <picture> element to optimize your images for all screen sizes and ensure the best performance. */}
      <img
        src='/quickstart-templates/content-image-03.webp'
        alt='A woman in workwear uses a STIHL leaf blower to clear fallen leaves and garden debris in a lush, green backyard with dense shrubbery and trees.'
        className={styles['first-two-thirds']}
        width={949}
        height={632}
      />
      <div className={styles['one-third']}>
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText>
          Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id
          arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus
          vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet
          augue ipsum eu felis sit. Cursus sit odio porttitor convallis
          venenatis faucibus neque massa porttitor.
        </DSText>
        <DSLinkButton
          href='#'
          iconName='chevron-right'
          iconPosition='right'
          variant='ghost'
          isFlush
          className={styles.link}
        >
          Link
        </DSLinkButton>
      </div>
    </section>
  );
}
