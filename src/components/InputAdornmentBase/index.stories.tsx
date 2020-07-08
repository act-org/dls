/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import Plus from '~/icons/Plus';

import InputAdornmentBase from '.';

export const Base = (): React.ReactElement<any> => (
  <InputAdornmentBase
    position={select(
      'Position',
      {
        Start: 'start',
        End: 'end',
      },
      'start',
    )}
  >
    <Plus />
  </InputAdornmentBase>
);

export default {
  component: InputAdornmentBase,
  parameters: {
    info: {
      text: 'This is the base variant of the InputAdornment component.',
    },
  },
  title: 'Atoms/InputAdornment',
};
