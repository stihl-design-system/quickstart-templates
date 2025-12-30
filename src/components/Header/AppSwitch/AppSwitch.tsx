'use client';

import {
  DSActionButton,
  DSActionLink,
  DSHeading,
  DSLinkButton,
  DSPopover,
} from '@stihl-design-system/components';
import { useState } from 'react';
import styles from './AppSwitch.module.scss';

export function AppSwitch() {
  const [isAppPopoverOpen, setIsAppPopoverOpen] = useState(false);

  return (
    <DSPopover
      placement='bottom-end'
      isOpen={isAppPopoverOpen}
      onOpenChange={setIsAppPopoverOpen}
    >
      <DSPopover.Anchor onClick={() => setIsAppPopoverOpen(!isAppPopoverOpen)}>
        <DSActionButton
          iconName={'nine-squares'}
          iconPosition='top'
          chevronDirection={isAppPopoverOpen ? 'up' : 'down'}
        >
          STIHL World
        </DSActionButton>
      </DSPopover.Anchor>
      <DSPopover.Content>
        <DSHeading
          size='small'
          id='app-switch-heading'
          className={styles.heading}
        >
          STIHL World
        </DSHeading>
        <ul aria-labelledby='app-switch-heading' className={styles.list}>
          <li aria-hidden='true' className={styles['horizontal-divider']}></li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/quickstart-templates/icon-stihl.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              STIHL Webseite
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/quickstart-templates/mystihl-icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              MY STIHL
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/quickstart-templates/connected-icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              STIHL Connected
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/quickstart-templates/imow-icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              iMOW® Web App
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/quickstart-templates/icon-stihl.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              Produktempfehlung
            </DSActionLink>
          </li>
          <li aria-hidden='true' className={styles['horizontal-divider']}></li>
          <li>
            <DSLinkButton
              href='#'
              variant='navigation'
              iconPosition='right'
              iconName='arrow-out'
            >
              Alle Services
            </DSLinkButton>
          </li>
        </ul>
      </DSPopover.Content>
    </DSPopover>
  );
}
