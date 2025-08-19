'use client';

import {
  DSActionButton,
  DSActionLink,
  DSHeading,
  DSLink,
  DSPopover,
} from '@stihl-design-system/components';
import styles from './Account.module.scss';

export function Account() {
  return (
    <DSPopover placement='bottom-end'>
      <DSPopover.Anchor>
        <DSActionButton
          // It's important to use a descriptive aria-label here, since the button contains a visual element only instead of a text label.
          aria-label='Toggle account menu'
          className={styles['avatar-button']}
        >
          {/* Just a decorative element. A screen reader user hearing "T T" would be pretty unhelpful. 
            So we can set aria-hidden="true" to the avatar placeholder. */}
          <div className={styles.avatar} aria-hidden='true'>
            TT
          </div>

          {/* If there is an avatar image, use an image tag to display it instead of the avatar placeholder. */}
          {/* <img src='path/to/avatar.jpg' alt='User Avatar of Tim Timber' className={styles.avatar} /> */}
        </DSActionButton>
      </DSPopover.Anchor>
      <DSPopover.Content>
        <div className={styles.account}>
          <div className={styles['account--left']}>
            <DSHeading
              size='medium'
              id='account-name'
              className={styles['account-name']}
            >
              Tim Timber
            </DSHeading>
            <DSLink href='#' variant='highlight'>
              Konto verwalten
            </DSLink>
          </div>
          <div>
            {/* Just a decorative element. A screen reader user hearing "T T" would be pretty unhelpful. 
              So we can set aria-hidden="true" to the avatar placeholder. */}
            <div className={styles.avatar} aria-hidden='true'>
              TT
            </div>

            {/* If there is an avatar image, use an image tag to display it instead of the avatar placeholder. */}
            {/* <img src='path/to/avatar.jpg' alt='User Avatar of Tim Timber' className={styles.avatar} /> */}
          </div>
        </div>
        <div className={styles['horizontal-divider']} />
        <h2 id='imow-account' className={styles['list-heading']}>
          iMOW® Account
        </h2>
        <nav aria-labelledby='imow-account'>
          <ul className={styles['list']}>
            <li>
              <DSActionLink href='#' iconName='note-check' stretched={true}>
                Rechtliche Unterlagen
              </DSActionLink>
            </li>
            <li>
              <DSActionLink href='#' iconName='security' stretched={true}>
                Cookies verwalten
              </DSActionLink>
            </li>
          </ul>
          <div className={styles['horizontal-divider']} />
          <h2 id='stihl-account' className={styles['list-heading']}>
            STIHL Account
          </h2>
          <ul aria-labelledby='stihl-account' className={styles['list']}>
            <li>
              <DSActionLink
                href='#'
                stretched={true}
                isActive={true}
                iconName='security'
              >
                Sicherheit & Passwort
              </DSActionLink>
            </li>
            <li>
              <DSActionLink href='#' iconName='note-check' stretched={true}>
                Nutzungsbedingungen
              </DSActionLink>
            </li>
            <li>
              <DSActionLink href='#' iconName='pin' stretched={true}>
                STIHL Fachhandel
              </DSActionLink>
            </li>
          </ul>
          <div className={styles['horizontal-divider']} />
          <h2 className={styles['list-heading']}>App-Version: 1.80.2</h2>
          <div className={styles['horizontal-divider']} />
          <DSActionLink href='#' iconName='arrow-out' stretched={true}>
            Sign out
          </DSActionLink>
        </nav>
      </DSPopover.Content>
    </DSPopover>
  );
}
