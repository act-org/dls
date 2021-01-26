/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import InputSecondary, { Props } from '.';

const Template: Story<Props> = args => {
  const [value, setValue] = React.useState('Input');
  return (
    <InputSecondary
      value={value}
      {...args}
    />
  );
};

export const Secondary: Story<Props> = Template.bind({});
Secondary.args = {
  autoFocus: false,
  disabled: false,
  multiline: false,
  placeholder: "Placeholder",
  size: "default",
  type: "text"
}

export default {
  argTypes: {
    onChange: {
      action: "change"
    },
    size: {
      control: {
        options: ['default', 'large'],
        type: 'select',
      }
    },
    type: {
      control: {
        options: ['text', 'password'],
        type: 'select',
      }
    }
  },
  component: InputSecondary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Input component.',
    },
  },
  title: 'Atoms/Input',
} as Meta<Props>;