/**
 * @prettier
 */

import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import GridContainer from '.';

export const container = (): React.ReactElement<any> => (
  <GridContainer
    alignContent={select(
      'AlignContent',
      {
        Center: 'center',
        FlexEnd: 'flex-end',
        FlexStart: 'flex-start',
        SpaceAround: 'space-around',
        SpaceBetween: 'space-between',
        Stretch: 'stretch',
      },
      'center',
    )}
    style={{
      height: 100,
      width: 100,
    }}
  >
    Grid Container
  </GridContainer>
);

export default {
  component: GridContainer,
  parameters: {
    info: {
      text: 'This is the container variant of the Grid component.',
    },
  },
  title: 'Atoms/Grid',
};
