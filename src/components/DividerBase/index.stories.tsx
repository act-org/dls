/**
 * @prettier
 */

import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import DividerBase from '.';

export const Base = (): React.ReactElement<any> => (
  <div
    style={{
      height: 100,
      width: 100,
    }}
  >
    <DividerBase
      light={boolean('Light?', false)}
      orientation={select(
        'Orientation',
        {
          Horizontal: 'horizontal',
          Vertical: 'vertical',
        },
        'horizontal',
      )}
      variant={select(
        'Variant',
        {
          FullWidth: 'fullWidth',
          Inset: 'inset',
          Middle: 'middle',
        },
        'fullWidth',
      )}
    />
  </div>
);

export default {
  component: DividerBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Divider component.',
    },
  },
  title: 'Atoms/Divider',
};
