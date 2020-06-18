/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import EmptyStatePrimary from '.';

export const primary = (): React.ReactElement<any> => (
  <EmptyStatePrimary
    buttonProps={{
      children: text('Button Text', 'Add User'),
      onClick: action('onClick()'),
    }}
    description={text(
      'Description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    )}
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
  title: 'Components/EmptyState',
};
