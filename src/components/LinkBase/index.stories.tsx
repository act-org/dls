/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LinkBase, { Props } from '.';

export const Base: Story<Props> = args => (
  <LinkBase {...args}>
    Click Me
  </LinkBase>
);
Base.args = {
  target: '_blank',
  to: 'https://www.act.org',
};

export default {
  component: LinkBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Link component.',
    },
  },
  title: 'Atoms/Link',
} as Meta<Props>;
