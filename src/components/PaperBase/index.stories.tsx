/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import PaperBase from '.';

export const Base = (): React.ReactElement<any> => (
  <PaperBase
    elevation={select(
      'Elevation',
      {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
      },
      1,
    )}
    square={boolean('Square?', false)}
    style={{
      height: 200,
      width: 200,
    }}
    variant={select(
      'Variant',
      {
        Elevation: 'elevation',
        Outlined: 'outlined',
      },
      'elevation',
    )}
  />
);

export default {
  component: PaperBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Paper component.',
    },
  },
  title: 'Atoms/Paper',
};
