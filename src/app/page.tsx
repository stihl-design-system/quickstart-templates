'use client';

import Half from '@/components/Content/Half/Half';
import Narrow from '@/components/Content/Narrow/Narrow';
import OneTwoSplit from '@/components/Content/OneTwoSplit/OneTwoSplit';
import PromoSectionMain from '@/components/Content/PromoSectionMain/PromoSectionMain';
import Quarters from '@/components/Content/Quarters/Quarters';
import Thirds from '@/components/Content/Thirds/Thirds';
import TwoOneSplit from '@/components/Content/TwoOneSplit/TwoOneSplit';
import { Hero } from '@/components/Header/Hero/Hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.page}>
        <Half />
        <Thirds />
        <TwoOneSplit />
        <OneTwoSplit />
        <PromoSectionMain />
        <Quarters />
        <Narrow />
      </div>
    </>
  );
}
