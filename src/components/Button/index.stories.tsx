/**
 * @prettier
 */

import Generator from './story.base';

export const Button = Generator({});

export default {
  component: Button,
  parameters: {
    docs: 'Some docs',
    info: {
      text: 'This is the primary variant of the Button component.',
    },
  },
  title: 'Atoms/Button',
};
