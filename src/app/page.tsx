import {
  DSButton,
  DSCheckbox,
  DSFieldset,
  DSHeading,
  DSInput,
  DSLogo,
  DSRadioGroup,
  DSText,
  DSTitle,
} from '@stihl-design-system/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles['top-bar']}>
          <div className={styles['top-bar-content']}>
            <DSLogo href='/' />
          </div>
        </div>
        <section className={styles['hero']}>
          <div className={styles['hero-image']}>
            <div className={styles['hero-image-title']}>
              <DSHeading tag='h2'>Heading 2</DSHeading>
            </div>
          </div>
        </section>
      </header>
      <section className={styles.content}>
        <DSTitle className={styles.title} tag='h1'>
          Heading 1
        </DSTitle>

        <form id='order-form' className={styles.form}>
          <DSFieldset
            legend={{
              headingText: 'Heading 2',
              headingTag: 'h2',
              headingSize: 'large-uppercase',
            }}
            className={styles.fieldset}
          >
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
          <DSButton className={styles['submit-button']} form='order-form'>
            Button
          </DSButton>
        </form>
      </section>
    </>
  );
}
