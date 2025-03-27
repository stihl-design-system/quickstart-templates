import {
  ComboboxOptionsOrOptGroups,
  DSButton,
  DSCheckbox,
  DSCheckboxGroup,
  DSCombobox,
  DSFieldset,
  DSHeading,
  DSInput,
  DSNotification,
  DSRadioGroup,
  DSSlider,
  DSTextarea,
} from '@stihl-design-system/components';
import styles from './Narrow.module.scss';
import { DSText } from '@stihl-design-system/components';

export default function Narrow() {
  const COUNTRIES: ComboboxOptionsOrOptGroups = [
    { value: 'DE', label: 'Germany' },
    { value: 'GB', label: 'United Kingdom' },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.narrow}>
        <DSHeading tag='h2' size='large' className={styles.heading}>
          Infrastructure voluptate elit amet ex ecosystem
        </DSHeading>
        <img
          src='/quickstart-templates/content/content-image-012.png'
          alt='A professional arborist wearing safety gear and a helmet is secured with ropes while working high in a tree in a dense forest. A STIHL battery-powered chainsaw hangs from their harness as they prepare for tree maintenance.'
          width={688}
          height={387}
          className={styles.image}
        />

        <DSText className='max-text-width'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </DSText>

        <form className={styles.form}>
          <DSFieldset
            legend={{
              headingText: 'Fieldset Heading 3',
              headingTag: 'h3',
              headingSize: 'medium',
            }}
            className={styles.fieldset}
          >
            <DSNotification>
              This is an example inline notification.
            </DSNotification>
            <DSText
              size='medium'
              weight='bold'
              aria-hidden='true'
              className={styles['mandatory-information']}
            >
              *Mandatory Information
            </DSText>
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
            <DSInput
              id='email'
              name='email'
              type='email'
              label='E-Mail'
              autoComplete='email'
              required={true}
            />
            <DSCombobox
              id='country-combobox'
              name='country'
              label='Country'
              required={true}
              autoComplete='country-name'
              options={COUNTRIES}
            />
            <DSSlider
              label='Length in cm (optional)'
              id='length-slider'
              numberInputProps={{ suffix: 'cm', size: 'small' }}
            />
            <DSTextarea
              name='notes'
              id='additional-notes'
              label='Additional notes (optional)'
              hint='Do you have any additional notes for us?'
              maxLength={500}
            />
          </DSFieldset>
          <DSCheckboxGroup
            id='terms-conditions'
            legend={{ headingText: 'Terms of Service', headingSize: 'small' }}
            description='By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.'
            className={styles.fieldset}
            required={true}
            systemFeedback='You must accept the terms of service to continue using this website'
          >
            <DSCheckbox
              name='terms-conditions'
              label='Accept Terms and Conditions'
              required={true}
            />
          </DSCheckboxGroup>
          <div className={styles.actions}>
            <DSButton variant='highlight'>Submit</DSButton>
          </div>
        </form>
      </div>
    </section>
  );
}
