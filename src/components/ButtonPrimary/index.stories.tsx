/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ButtonPrimary, { Props } from '.';

interface StoryProps extends Props {
  text: string;
}

export const Primary: Story<StoryProps> = ({ text, ...args }) => (
  <ButtonPrimary {...args}>{text}</ButtonPrimary>
);
Primary.args = {
  disabled: true,
  size: 'medium',
  text: 'Click Me',
};

export default {
  component: ButtonPrimary,
  parameters: {
    argTypes: {
      onClick: {
        action: 'click',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  title: 'Atoms/Button',
} as Meta<StoryProps>;
