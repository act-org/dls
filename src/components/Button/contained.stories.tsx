/**
 * @prettier
 */

/* eslint-disable sort-keys */

import Generator from './story.base';

export const Contained = Generator({ variant: 'contained' });

export default {
  component: Contained,
  parameters: {
    info: {
      text: 'This is the primary variant of the Button component.',
    },
  },
  title: 'Atoms/Button/Variants',
};
