'use client';
import {
  DSBanner,
  DSHeader,
  DSIcon,
  DSInputSearch,
  DSLink,
  DSTopBar,
} from '@stihl-design-system/components';
import styles from './Header.module.scss';
import { MainNavigation } from './MainNavigation/MainNavigation';
import { UtilityNavigation } from './UtilityNavigation/UtilityNavigation';

export function Header() {
  return (
    <>
      <DSHeader
        variant='main'
        isHeaderSticky={true}
        brandAddOnProps={{ children: 'Example' }}
      >
        <DSHeader.BannerArea>
          <DSBanner>
            <div className={styles['banner-content']}>
              <DSIcon aria-hidden='true' name='placeholder' theme='dark' />
              <DSLink
                iconName='chevron-right'
                href='#'
                theme='dark'
                iconPosition='right'
              >
                Promo Banner Link
              </DSLink>
            </div>
          </DSBanner>
        </DSHeader.BannerArea>
        <DSTopBar>
          <DSTopBar.BrandArea />
          <DSTopBar.PrimaryArea>
            <form role='search' className={styles['input-search-form']}>
              <DSInputSearch
                name='product-search'
                id='product-search'
                label='Produktsuche'
                placeholder='Produktsuche'
                hideLabel={true}
                className={styles['input-search--rounded']}
              />
            </form>
          </DSTopBar.PrimaryArea>
          <DSTopBar.SecondaryArea>
            <UtilityNavigation />
          </DSTopBar.SecondaryArea>
        </DSTopBar>
        <DSHeader.MainNavigationArea>
          <MainNavigation />
        </DSHeader.MainNavigationArea>
      </DSHeader>
    </>
  );
}
