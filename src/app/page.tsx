'use client';

import {
  DSButton,
  DSCheckbox,
  DSFieldset,
  DSInput,
  DSNotification,
  DSRadioGroup,
  DSTitle,
} from '@stihl-design-system/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.content}>
      <DSTitle className={styles.title} tag='h1'>
        Heading 1
      </DSTitle>
      <form className={styles.form}>
        <DSFieldset
          legend={{
            headingText: 'Heading 2',
            headingTag: 'h2',
            headingSize: 'large-uppercase',
          }}
          className={styles.fieldset}
        >
          <DSNotification hideCloseButton>
            This is an example inline notification.
          </DSNotification>
          <DSCheckbox name='business' label='I am a business client' />
          <DSRadioGroup
            legend='Title'
            name='title'
            alignment='horizontal'
            options={[
              { value: 'mr', label: 'Mr.' },
              { value: 'mrs', label: 'Mrs.' },
              { value: 'other', label: 'other' },
            ]}
            required
          />
          <DSInput
            id='surname-input'
            name='surname'
            label='Surname'
            required={true}
            autoComplete='given-name'
          />
          <DSInput
            id='name-input'
            name='name'
            label='Name'
            required={true}
            autoComplete='family-name'
          />
        </DSFieldset>
        <div className={styles.actions}>
          <DSButton variant='filled'>Button</DSButton>
        </div>
      </form>
    </section>
  );
}
