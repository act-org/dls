/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import EmptyStateBase from '.';

export const base = (): React.ReactElement<any> => (
  <EmptyStateBase
    buttonProps={{
      children: 'Add User',
      onClick: action('onClick()'),
    }}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    title="No users yet."
  />
);

export default {
  component: EmptyStateBase,
  parameters: {
    info: {
      text: 'This is the base variant of the EmptyState component.',
    },
  },
  title: 'Molecules/EmptyState',
};
