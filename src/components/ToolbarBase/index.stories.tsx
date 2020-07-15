/**
 * @prettier
 */

import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import ToolbarBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ToolbarBase
    disableGutters={boolean('Disable Gutters?', false)}
    variant={select(
      'Variant',
      {
        Dense: 'dense',
        Regular: 'regular',
      },
      'regular',
    )}
  >
    Toolbar
  </ToolbarBase>
);

export default {
  component: ToolbarBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Toolbar component.',
    },
  },
  title: 'Atoms/Toolbar',
};
