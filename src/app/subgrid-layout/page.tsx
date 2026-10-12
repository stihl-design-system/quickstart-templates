'use client';

import Half from '@/components/ContentSubgrid/Half/Half';
import Narrow from '@/components/ContentSubgrid/Narrow/Narrow';
import OneTwoSplit from '@/components/ContentSubgrid/OneTwoSplit/OneTwoSplit';
import PromoSectionMain from '@/components/ContentSubgrid/PromoSectionMain/PromoSectionMain';
import Quarters from '@/components/ContentSubgrid/Quarters/Quarters';
import Thirds from '@/components/ContentSubgrid/Thirds/Thirds';
import TwoOneSplit from '@/components/ContentSubgrid/TwoOneSplit/TwoOneSplit';
import { DSHeading } from '@stihl-design-system/components';
import styles from './page.module.scss';

// **************************************************************
// Same content as the start page (/src/app/page.tsx), but laid out with
// subgrid instead of the row-based grid: the page wrapper is the only grid
// container, all modules below reuse its column tracks.
// See /src/styles/_subgrid.scss for the pattern.
// **************************************************************
export default function SubgridLayout() {
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
