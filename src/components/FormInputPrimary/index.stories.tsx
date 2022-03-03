/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import FormInputPrimary from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export const Preview = (): React.ReactElement<unknown> => {
  const [value, setValue] = React.useState('Input');

  return (
    <FormInputPrimary
      inputProps={{
        onChange: (e: any): void => {
          action('onChange()');

          setValue(e.target.value);
        },
        placeholder: 'Placeholder',
        style: {
          width: 250,
        },
        type: 'text',
      }}
      labelProps={{
        children: 'Input Label',
      }}
    />
  );
};

export default {
  component: FormInputPrimary,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Disabled?',
      defaultValue: false
    },
    errorMessage: {
      type: 'string',
      description: 'Error Message',
      defaultValue: 'Error Message'
    },
    inputProps: {},
    required: {
      type: 'boolean',
      defaultValue: false
    }

  },
  parameters: {
    info: {
      text: 'This is the primary variant of the FormInput component.',
    },
  },
  title: 'Deprecated/Molecules/FormInputPrimary',
} as ComponentMeta<typeof FormInputPrimary>;
