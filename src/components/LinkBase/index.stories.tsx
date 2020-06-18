/**
 * @prettier
 */

import * as React from 'react';
// import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';

import LinkBase from '.';

export const base = (): React.ReactElement<any> => (
  <LinkBase target="_blank" to="https://www.act.org">
    Click Me
  </LinkBase>
);

export default {
  component: LinkBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Link component.',
    },
  },
  title: 'Components/Link',
};
