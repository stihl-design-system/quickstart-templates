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
  DSText,
  DSTextarea,
} from '@stihl-design-system/components';
import classNames from 'classnames';
import styles from './Narrow.module.scss';

export default function Narrow() {
  const COUNTRIES: ComboboxOptionsOrOptGroups = [
    { value: 'DE', label: 'Germany' },
    { value: 'GB', label: 'United Kingdom' },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.narrow}>
        <DSHeading tag='h2' size='large-uppercase' className={styles.heading}>
          Baumkletterer – Königsdisziplin bei der Baumpflege
        </DSHeading>
        {/* Consider using srcset, sizes, and/or the <picture> element to optimize your images for all screen sizes and ensure the best performance. */}
        <img
          src='/quickstart-templates/content-image-012.webp'
          alt='Mann mit Kletterausrüstung und Ketten im   
Baum.'
          width={688}
          height={387}
          className={styles.image}
        />

        <DSText className='max-text-width'>
          Baumklettern gilt als Königsdisziplin der Baumpflege – hier sind
          Können, Präzision und Vertrauen gefragt. In luftiger Höhe entscheidet
          jede Bewegung über Sicherheit und Effizienz. Profis setzen auf
          modernste Technik und durchdachte Ausrüstung, um selbst
          anspruchsvollste Aufgaben zu meistern. Dabei geht es nicht nur um das
          Schneiden, sondern um den Erhalt und die Pflege wertvoller Bäume.
          STIHL unterstützt Baumkletterer mit leistungsstarken Geräten, die
          speziell für den Einsatz in der Höhe entwickelt wurden. So wird aus
          einer Herausforderung ein perfektes Zusammenspiel von Mensch, Technik
          und Natur.
        </DSText>

        <form className={classNames(styles.form, 'max-text-width')}>
          <DSFieldset
            legend={{
              headingText: 'Anmeldeformular',
              headingTag: 'h3',
              headingSize: 'medium',
            }}
            className={styles.fieldset}
          >
            <DSNotification>
              Sie können sich jederzeit wieder abmelden.
            </DSNotification>
            <DSText
              size='medium'
              weight='bold'
              aria-hidden='true'
              className={styles['mandatory-information']}
            >
              *Pflichtfelder
            </DSText>
            <DSCheckbox name='business' label='Ich bin ein Geschäftskunde' />
            <DSRadioGroup
              legend='Anrede'
              name='title'
              direction='horizontal'
              options={[
                { value: 'mr', label: 'Herr' },
                { value: 'mrs', label: 'Frau' },
                { value: 'other', label: 'Andere' },
              ]}
              required
            />
            <DSInput
              id='firstname-input'
              name='firstname'
              label='Vorname'
              required={true}
              autoComplete='given-name'
            />
            <DSInput
              id='lastname-input'
              name='lastname'
              label='Nachname'
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
              label='Land'
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
              label='Zusätzliche Anmerkungen (optional)'
              hint='Haben Sie zusätzliche Anmerkungen für uns?'
              maxLength={500}
            />
          </DSFieldset>
          <DSCheckboxGroup
            id='terms-conditions'
            legend={{
              headingText: 'Nutzungsbedingungen',
              headingSize: 'small',
            }}
            description='Durch den Zugriff auf diese Website gehen wir davon aus, dass Sie diese Nutzungsbedingungen akzeptieren. Wenn Sie nicht zustimmen, diese Nutzungsbedingungen vollständig zu akzeptieren, nutzen Sie die Website bitte nicht weiter.'
            className={styles.fieldset}
            required={true}
            systemFeedback='Sie müssen die Nutzungsbedingungen akzeptieren, um diese Website weiterhin nutzen zu können.'
          >
            <DSCheckbox
              name='terms-conditions'
              label='Nutzungsbedingungen akzeptieren'
              required={true}
            />
          </DSCheckboxGroup>
          <div className={styles.actions}>
            <DSButton variant='highlight'>Absenden</DSButton>
          </div>
        </form>
      </div>
    </section>
  );
}
