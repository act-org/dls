/**
 * @prettier
 */

import * as React from 'react';

import ContainerBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ContainerBase>Container</ContainerBase>
);

export default {
  component: ContainerBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Container component.',
    },
  },
  title: 'Atoms/Container',
};
