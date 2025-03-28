import { DSHeading } from '@stihl-design-system/components';
import styles from './Half.module.scss';
import { DSText } from '@stihl-design-system/components';
import { DSLinkButton } from '@stihl-design-system/components';

export default function Half() {
  return (
    <section className={styles.section}>
      <div className={styles['first-half']}>
        <img
          src='/quickstart-templates/content-image-01.png'
          alt='Two forestry workers in orange and black protective gear walk uphill through a snowy forest, each carrying a chainsaw. The tall pine trees are covered in snow, and the scene is misty and wintry.'
          width={688}
          height={387}
          className={styles.image}
        />
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText className='max-text-width'>
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
      <div className={styles['second-half']}>
        <img
          src='/quickstart-templates/content-image-02.png'
          alt='A selection of STIHL battery-powered garden tools displayed on a neatly trimmed lawn in front of a tall green hedge, including a lawn mower, hedge trimmer, leaf blower, and chainsaw.'
          width={688}
          height={387}
          className={styles.image}
        />
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Analytics scalability making training infrastructure
        </DSHeading>
        <DSText className='max-text-width'>
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
