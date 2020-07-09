/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import FormInputPrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('Input');

  return (
    <FormInputPrimary
      disabled={boolean('Disabled?', false)}
      errorMessage={text('Error Message', '')}
      inputProps={{
        autoFocus: boolean('Auto Focus?', false),
        onChange: (e: any): void => {
          action('onChange()');

          setValue(e.target.value);
        },
        placeholder: text('Placeholder', 'Placeholder'),
        style: {
          width: 250,
        },
        type: select(
          'Type',
          {
            Password: 'password',
            Text: 'text',
          },
          'text',
        ),
        value,
      }}
      labelProps={{
        children: text('Label', 'Input Label'),
      }}
      required={boolean('Required?', true)}
    />
  );
};

export default {
  component: FormInputPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the FormInput component.',
    },
  },
  title: 'Molecules/FormInput',
};
