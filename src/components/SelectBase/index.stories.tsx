/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import MenuItemBase from '~/components/MenuItemBase';

import SelectBase from '.';

export const Base = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState(1);

  return (
    <SelectBase
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
        <MenuItemBase key={i} value={i}>
          {i + 1}
        </MenuItemBase>
      ))}
    </SelectBase>
  );
};

export default {
  component: SelectBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Select component.',
    },
  },
  title: 'Atoms/Select',
};
