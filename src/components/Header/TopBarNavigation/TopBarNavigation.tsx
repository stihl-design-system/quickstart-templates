'use client';

import {
  DSActionButton,
  DSActionLink,
  DSDrawer,
} from '@stihl-design-system/components';
import styles from './TopBarNavigation.module.scss';
import { useState } from 'react';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import { AppSwitch } from '../AppSwitch/AppSwitch';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';

export function TopBarNavigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav aria-label='Top Bar Navigation'>
        <ul className={styles['list']}>
          <li className={styles['only-desktop']}>
            <DSActionLink
              id='top-bar-link-contact'
              href='#'
              iconPosition='top'
              iconName='envelope'
              numberIndicatorValue=''
            >
              Contact
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              id='top-bar-link-cart'
              href='#'
              iconPosition='top'
              iconName='cart'
              numberIndicatorValue='5'
            >
              Cart
            </DSActionLink>
          </li>
          {/* The Language and STIHL World button in the DSTopBar should only be visible on larger devices. */}
          <li className={styles['only-desktop']}>
            <LanguageSelect />
          </li>
          {/* Vertical divider, with aria-hidden="true" */}
          <li aria-hidden='true'>
            <div className={styles['vertical-divider']} />
          </li>
          {/* The STIHL World button in the DSTopBar should only be visible on larger devices. */}
          <li className={styles['only-desktop']}>
            <AppSwitch />
          </li>
          {/* Menu button that is only visible on mobile devices */}
          <li className={styles['burger-menu-btn']}>
            <DSActionButton
              iconName='burger'
              iconPosition='top'
              onClick={() => setShowMobileMenu(true)}
              aria={{ 'aria-label': 'Open menu' }}
            >
              Menu
            </DSActionButton>
          </li>
        </ul>
      </nav>
      {/* Use DSDrawer for mobile menu. Since it's placed in the Top Layer it can be used at any position */}
      <DSDrawer
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        position='end'
      >
        <MobileNavigation />
      </DSDrawer>
    </>
  );
}
