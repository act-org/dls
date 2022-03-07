/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { MenuItem } from '@material-ui/core';

import SelectPrimary from '.';

export const Preview = (): React.ReactElement<unknown> => {
  const [value, setValue] = React.useState(1);

  return (
    <SelectPrimary
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      value={value}
    >
      {Array(...Array(10)).map((_, i): any => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={i} value={i}>
          {i + 1}
        </MenuItem>
      ))}
    </SelectPrimary>
  );
};

export default {
  component: SelectPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Select component.',
    },
  },
  title: 'Deprecated/Atoms/SelectPrimary',
};
