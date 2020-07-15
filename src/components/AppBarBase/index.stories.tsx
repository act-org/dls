/**
 * @prettier
 */

import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import AppBarBase from '.';

export const Base = (): React.ReactElement<any> => (
  <AppBarBase
    color={select(
      'Color',
      {
        Default: 'default',
        Inherit: 'inherit',
        Primary: 'primary',
        Secondary: 'secondary',
        Transparent: 'transparent',
      },
      'primary',
    )}
    position={select(
      'Position',
      {
        Absolute: 'absolute',
        Fixed: 'fixed',
        Relative: 'relative',
        Static: 'static',
        Sticky: 'sticky',
      },
      'fixed',
    )}
  >
    App Bar Here
  </AppBarBase>
);

export default {
  component: AppBarBase,
  parameters: {
    info: {
      text: 'This is the base variant of the AppBar component.',
    },
  },
  title: 'Atoms/AppBar',
};
