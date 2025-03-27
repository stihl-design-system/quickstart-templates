'use client';

import { DSHeading } from '@stihl-design-system/components';
import styles from './page.module.scss';
import Half from '@/components/Content/Half/Half';
import Thirds from '@/components/Content/Thirds/Thirds';
import TwoOneSplit from '@/components/Content/TwoOneSplit/TwoOneSplit';
import OneTwoSplit from '@/components/Content/OneTwoSplit/OneTwoSplit';
import PromoSectionMain from '@/components/Content/PromoSectionMain/PromoSectionMain';
import Quarters from '@/components/Content/Quarters/Quarters';
import Narrow from '@/components/Content/Narrow/Narrow';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.row}>
        <DSHeading tag='h2' size='large-uppercase' className={styles.title}>
          Big Artificial
        </DSHeading>
      </section>
      <Half />
      <Thirds />
      <section className={styles.row}>
        <DSHeading tag='h2' size='large-uppercase' className={styles.title}>
          Big Artificial
        </DSHeading>
      </section>
      <TwoOneSplit />
      <OneTwoSplit />
      <PromoSectionMain />
      <section className={styles.row}>
        <DSHeading tag='h2' size='large-uppercase' className={styles.title}>
          Big sint efficiency dolore amet
        </DSHeading>
      </section>
      <Quarters />
      <Narrow />
    </div>
  );
}
