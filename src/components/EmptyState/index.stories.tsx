/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';

import EmptyState from '.';

export const base = (): React.ReactElement<any> => (
  <EmptyState
    action={{
      disabled: false,
      onClick: action('onClick()'),
      title: 'Action Title',
    }}
    description="EmptyState Description"
    style={{ color: 'red' }}
    title="EmptyState Title"
  />
);

export default {
  component: EmptyState,
  parameters: {
    info: {
      text:
        'This is the base button component. It is not intended to be used directly.',
    },
  },
  title: 'Components/EmptyState',
};
