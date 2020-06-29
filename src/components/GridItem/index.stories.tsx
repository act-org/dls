/**
 * @prettier
 */

/* eslint-disable react/no-array-index-key, sort-keys */

import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import GridContainer from '~/components/GridContainer';

import GridItem from '.';

export const item = (): React.ReactElement<any> => (
  <GridContainer
    spacing={select(
      'Spacing',
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
      0,
    )}
  >
    {[
      ...new Array(
        select(
          'Quantity',
          {
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
        ),
      ),
    ].map(
      (_, i): React.ReactElement<any> => (
        <GridItem key={i}>{`Grid Item ${i + 1}`}</GridItem>
      ),
    )}
  </GridContainer>
);

export default {
  component: GridItem,
  parameters: {
    info: {
      text: 'This is the item variant of the Grid component.',
    },
  },
  title: 'Atoms/Grid',
};
