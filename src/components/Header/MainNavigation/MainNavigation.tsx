'use client';

import {
  DSButton,
  DSLinkButton,
  DSScroller,
} from '@stihl-design-system/components';
import styles from './MainNavigation.module.scss';

export function MainNavigation() {
  return (
    <DSScroller className={styles['main-navigation']}>
      <nav aria-label='Main Navigation'>
        <ul>
          <li>
            <DSButton
              variant='navigation'
              iconName='chevron-down'
              iconPosition='right'
            >
              Products
            </DSButton>
          </li>
          <li>
            <DSButton
              variant='navigation'
              iconName='chevron-down'
              iconPosition='right'
            >
              Service
            </DSButton>
          </li>
          <li>
            <DSButton
              variant='navigation'
              iconName='chevron-down'
              iconPosition='right'
            >
              Events
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
              Professionals
            </DSLinkButton>
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
        </ul>
      </nav>
    </DSScroller>
  );
}
