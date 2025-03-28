import { DSHeading } from '@stihl-design-system/components';
import styles from './Thirds.module.scss';
import { DSText } from '@stihl-design-system/components';
import { DSLinkButton } from '@stihl-design-system/components';

export default function Thirds() {
  return (
    <section className={styles.section}>
      <div className={styles['first-third']}>
        <img
          src='/quickstart-templates/content-image-04.png'
          alt='Two people load STIHL garden tools onto the back of a white pickup truck parked on a path in a landscaped urban park, with autumn trees and office buildings in the background.'
          width={448}
          height={252}
          className={styles.image}
        />
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
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
      <div className={styles['second-third']}>
        <img
          src='/quickstart-templates/content-image-05.png'
          alt='A close-up of a STIHL chainsaw bar and chain resting on a tree stump in a forest, with a large felled log in the background.'
          width={448}
          height={252}
          className={styles.image}
        />
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
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
      <div className={styles['third-third']}>
        <img
          src='/quickstart-templates/content-image-06.png'
          alt='A man wearing protective gear trims overgrown vegetation in a dense garden using a STIHL brushcutter on a sunny day.'
          width={448}
          height={252}
          className={styles.image}
        />
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
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
