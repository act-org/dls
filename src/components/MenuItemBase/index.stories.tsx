/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import MenuItemBase from '.';

export const Base = (): React.ReactElement<any> => (
  <MenuItemBase onClick={action('onClick()')} value="MenuItem">
    {text('Text', 'Menu Item')}
  </MenuItemBase>
);

export default {
  component: MenuItemBase,
  parameters: {
    info: {
      text: 'This is the base variant of the MenuItem component.',
    },
  },
  title: 'Atoms/MenuItem',
};
