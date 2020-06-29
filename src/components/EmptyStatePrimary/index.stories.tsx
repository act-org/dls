/**
 * @prettier
 */

import * as React from 'react';
import { Account as AccountIcon } from 'mdi-material-ui';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import EmptyStatePrimary from '.';

export const Primary = (): React.ReactElement<any> => (
  <EmptyStatePrimary
    buttonProps={
      boolean('Button?', true)
        ? {
            children: text('Button Text', 'Add User'),
            onClick: action('onClick()'),
          }
        : undefined
    }
    description={text(
      'Description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    )}
    Icon={boolean('Icon?', true) ? AccountIcon : undefined}
    title={text('Title', 'No users yet.')}
  />
);

export default {
  component: EmptyStatePrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the EmptyState component.',
    },
  },
  title: 'Molecules/EmptyState',
};
