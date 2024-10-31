'use client';

import {
  DSButton,
  DSHeading,
  DSCheckbox,
  DSFieldset,
  DSInput,
  DSNotification,
  DSRadioGroup,
  DSText,
} from '@stihl-design-system/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.content}>
      <DSText>
        Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu
        sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus
        vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue
        ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis
        faucibus neque massa porttitor. Facilisis volutpat elementum in eu.
        Fringilla et non tellus proin. Mauris tempus placerat fringilla ut.
      </DSText>
      <DSHeading className={styles.title} tag='h2' size='large-uppercase'>
        Heading 2
      </DSHeading>
      <form className={styles.form}>
        <DSFieldset
          legend={{
            headingText: 'Fieldset Heading 2',
            headingTag: 'h2',
            headingSize: 'large',
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
            direction='horizontal'
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
