'use client';

import {
  DSActionButton,
  DSButton,
  DSLinkButton,
} from '@stihl-design-system/components';
import classNames from 'classnames';
import styles from './MobileNavigation.module.scss';

export function MobileNavigation() {
  return (
    <div className={styles.content}>
      <nav aria-label='Main Navigation'>
        <ul className={classNames(styles.list)}>
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
              Service
            </DSButton>
          </li>
          <li>
            <DSButton
              variant='navigation'
              iconName='chevron-right'
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
      <nav aria-label='Sub Navigation'>
        <ul className={classNames(styles.list)}>
          <li>
            <DSActionButton iconName='envelope' stretched={true}>
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
        </ul>
      </nav>
    </div>
  );
}
