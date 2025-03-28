import { DSHeading } from '@stihl-design-system/components';
import styles from './OneTwoSplit.module.scss';
import { DSText } from '@stihl-design-system/components';
import { DSLinkButton } from '@stihl-design-system/components';

export default function OneTwoSplit() {
  return (
    <section className={styles.section}>
      <img
        src='/quickstart-templates/content-image-08.png'
        alt='A person holds a STIHL AP 500 S battery, showing its charge level with LED indicators, while wearing an orange work jacket outdoors.'
        className={styles['first-third']}
        width={447}
        height={335}
      />
      <div className={styles['two-thirds']}>
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText className='max-text-width'>
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
