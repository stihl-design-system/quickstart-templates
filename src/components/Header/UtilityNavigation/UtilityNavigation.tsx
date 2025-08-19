'use client';

import {
  DSActionButton,
  DSActionLink,
  DSDrawer,
} from '@stihl-design-system/components';
import styles from './UtilityNavigation.module.scss';
import { useState } from 'react';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import { AppSwitch } from '../AppSwitch/AppSwitch';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { Account } from '../Account/Account';

export function UtilityNavigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav aria-label='Top Bar Navigation'>
        <ul className={styles['navigation-list']}>
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
          {/* The Language and STIHL World button in the DSTopBar should only be visible on viewports >= L (1024px). */}
          <li className={styles['only-desktop']}>
            <LanguageSelect />
          </li>
          {/* Vertical divider, with aria-hidden="true" */}
          <li aria-hidden='true'>
            <div className={styles['vertical-divider']} />
          </li>
          {/* The Language and STIHL World button in the DSTopBar should only be visible on viewports >= L (1024px). */}
          <li className={styles['only-desktop']}>
            <AppSwitch />
          </li>
          {/* The Account button in the DSTopBar should only be visible on viewports >= L (1024px). */}
          <li className={styles['only-desktop']}>
            <Account />
          </li>
          {/* The burger menu button should only be visible on viewports < L (1024px). */}
          <li className={styles['only-mobile']}>
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
      {/* Use DSDrawer for Mobile Menu. Since it's placed in the Top Layer it can be used at any position. */}
      <DSDrawer
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        position='end'
        className={styles['mobile-menu']}
      >
        <MobileNavigation />
      </DSDrawer>
    </>
  );
}
