/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import FormSelectPrimary from '.';

export const Preview = (): React.ReactElement<unknown> => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  return (
    <FormSelectPrimary
      disabled={false}
      labelProps={{
        children: 'Input Label',
        error: false,
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
      placeholder="Placeholder"
      placeholderIsDisabled
      required
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
