/**
 * @prettier
 */

import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import LoadingPrimary from '.';

export const Primary = (): React.ReactElement<any> => (
  <LoadingPrimary
    circularProgressProps={{
      size: Number(text('Size', '24')),
      thickness: Number(text('Thickness', '4.5')),
    }}
    title={text('Title', 'Loading...')}
  />
);

export default {
  component: LoadingPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Loading component.',
    },
  },
  title: 'Molecules/Loading',
};
