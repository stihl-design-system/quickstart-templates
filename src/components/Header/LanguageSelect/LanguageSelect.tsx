'use client';

import {
  DSActionButton,
  DSActionLink,
  DSInputSearch,
  DSPopover,
} from '@stihl-design-system/components';
import styles from './LanguageSelect.module.scss';
import { useState } from 'react';

export function LanguageSelect() {
  const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] = useState(false);

  return (
    <DSPopover
      placement='bottom-end'
      isOpen={isLanguagePopoverOpen}
      onOpenChange={setIsLanguagePopoverOpen}
    >
      <DSPopover.Anchor
        onClick={() => setIsLanguagePopoverOpen(!isLanguagePopoverOpen)}
      >
        <DSActionButton
          iconPosition='top'
          iconName='globe'
          chevronDirection={isLanguagePopoverOpen ? 'up' : 'down'}
        >
          Language
        </DSActionButton>
      </DSPopover.Anchor>
      <DSPopover.Content>
        <form id='language-search' role='search'>
          <DSInputSearch
            id='language-filter'
            label='Search Language'
            placeholder='Search Language'
            hideLabel={true}
            size='small'
            className={styles['filter-input']}
          />
        </form>
        <div className={styles['horizontal-divider']} />
        <h2 id='global-sites' className={styles['list-heading']}>
          Global Sites
        </h2>
        <ul aria-labelledby='global-sites' className={styles['list']}>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / English
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / Español
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / Français
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / Portugals
            </DSActionLink>
          </li>
        </ul>
        <div className={styles['horizontal-divider']} />
        <h2 id='local-sites' className={styles['list-heading']}>
          Local Sites
        </h2>
        <ul aria-labelledby='local-sites' className={styles.list}>
          <li>
            <DSActionLink href='#' stretched={true} isActive={true}>
              Deutschland / Deutsch
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Argentina / Español
            </DSActionLink>
          </li>
        </ul>
      </DSPopover.Content>
    </DSPopover>
  );
}
