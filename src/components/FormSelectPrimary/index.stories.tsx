/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import FormSelectPrimary from '.';

export const Preview = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  return (
    <FormSelectPrimary
      disabled={boolean('Disabled?', false)}
      labelProps={{
        children: text('Label', 'Input Label'),
        error: boolean('Error?', false),
      }}
      options={[
        {
          label: 'One',
          value: 'ONE',
        },
        {
          label: 'Two',
          value: 'TWO',
        },
        {
          label: 'Three',
          value: 'THREE',
        },
      ]}
      placeholder={text('Placeholder', 'Placeholder')}
      placeholderIsDisabled={boolean('Disable Placeholder?', true)}
      required={boolean('Required?', true)}
      selectProps={{
        onChange: (e: any): void => {
          action('onChange()');

          setValue(e.target.value);
        },
        style: {
          width: 250,
        },
        value,
      }}
    />
  );
};

export default {
  component: FormSelectPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the FormSelect component.',
    },
  },
  title: 'Deprecated/Molecules/FormSelectPrimary',
};
