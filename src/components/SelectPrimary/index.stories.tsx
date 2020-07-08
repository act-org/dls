/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import MenuItemBase from '~/components/MenuItemBase';

import SelectPrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState(1);

  return (
    <SelectPrimary
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
  title: 'Atoms/Select',
};