/**
 * @prettier
 */

import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import LoadingBase from '.';

export const Base = (): React.ReactElement<any> => (
  <LoadingBase
    circularProgressProps={{
      size: Number(text('Size', '24')),
      thickness: Number(text('Thickness', '4.5')),
    }}
    title={text('Title', 'Loading...')}
  />
);

export default {
  component: LoadingBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Loading component.',
    },
  },
  title: 'Molecules/Loading',
};
