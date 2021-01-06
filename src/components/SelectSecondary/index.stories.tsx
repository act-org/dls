/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { MenuItem } from '@material-ui/core';
import { select } from '@storybook/addon-knobs';

import SelectSecondary from '.';

export const Secondary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState(1);

  return (
    <SelectSecondary
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      value={value}
    >
      {Array(
        ...Array(
          select(
            'Menu Items Count',
            {
              1: 1,
              2: 2,
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8,
              9: 9,
              10: 10,
            },
            5,
          ),
        ),
      ).map((_, i): any => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={i} value={i}>
          {i + 1}
        </MenuItem>
      ))}
    </SelectSecondary>
  );
};

export default {
  component: SelectSecondary,
  parameters: {
    info: {
      text: 'This is the secondary variant of the Select component.',
    },
  },
  title: 'Atoms/Select',
};
