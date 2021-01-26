/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import LinkText, { Props } from '.';

const Template: Story<Props> = args => <LinkText {...args}>Click Me</LinkText>;
export const Text: Story<Props> = Template.bind({});
Text.args = {
  target: "_blank",
  to: 'https://www.act.org',
};

export default {
  argTypes: {

  },
  component: LinkText,
  parameters: {
    info: {
      text: 'This is the text variant of the Link component.',
    },
  },
  title: 'Atoms/Link',
} as Meta<Props>;
