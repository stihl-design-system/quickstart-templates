'use client';

import {
  DSActionButton,
  DSButton,
  DSLinkButton,
} from '@stihl-design-system/components';
import styles from './MobileNavigation.module.scss';

export function MobileNavigation() {
  /**
   * Example of a Mobile Menu where the
   * DSButton variant navigation & DSLinkButton variant navigation from the DSHeader.MainNavigationArea,
   * and DSActionButton & DSActionLink from the DSTopBar
   * elements are moved into, on viewports < L (1024px).
   */
  return (
    <div className={styles['mobile-menu-content']}>
      {/**
       * Screen readers read this out as "Main, Navigation". So there is no need to add "Navigation" manually to the aria-label.
       * Don't forget to translate it.
       */}
      <nav aria-label='Main'>
        <ul className={styles['navigation-list--mobile']}>
          <li>
            <DSButton
              variant='navigation'
              iconName='chevron-right'
              iconPosition='right'
            >
              Products
            </DSButton>
          </li>
          <li>
            <DSButton
              variant='navigation'
              iconName='chevron-right'
              iconPosition='right'
            >
              Accessoirs
            </DSButton>
          </li>
          <li>
            <DSLinkButton
              variant='navigation'
              href='#'
              iconName='arrow-out'
              iconPosition='right'
              target='_blank'
            >
              Others
            </DSLinkButton>
          </li>
          {/* ... other navigation elements move here from the DSHeader.MainNavigationArea */}
        </ul>
      </nav>
      {/**
       * Screen readers read this out as "Utility, Navigation". So there is no need to add "Navigation" manually to the aria-label.
       * Don't forget to translate it.
       */}
      <nav aria-label='Utility'>
        <ul className={styles['navigation-list--mobile']}>
          {/* Horizontal divider, with aria-hidden="true" */}
          <li
            aria-hidden='true'
            className={styles['horizontal-divider--mobile']}
          />
          <li>
            <DSActionButton
              iconName='envelope'
              numberIndicatorValue=''
              stretched={true}
            >
              Contact
            </DSActionButton>
          </li>
          <li>
            <DSActionButton
              iconName='globe'
              chevronDirection='right'
              stretched={true}
            >
              Language Select
            </DSActionButton>
          </li>
          <li>
            <DSActionButton
              iconName={'nine-squares'}
              chevronDirection='right'
              stretched={true}
            >
              STIHL World
            </DSActionButton>
          </li>
          {/* ... other navigation elements move here from the DSTopBar Utility Navigation */}
        </ul>
      </nav>
    </div>
  );
}
