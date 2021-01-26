/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import InputPrimary, { Props } from '.';

const Template: Story<Props> = args => {
  const [value, setValue] = React.useState('Input');
  return (
    <InputPrimary
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
      }}
      value={value}
      {...args}
    />
  );
};

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  autoFocus: false,
  disabled: false,
  multiline: false,
  placeholder: "Placeholder"
}

export default {
  component: InputPrimary,
  parameters: {
    controls: { expanded: true },
    info: {
      text: 'This is the primary variant of the Input component.',
    },
  },
  title: 'Atoms/Input',
} as Meta<Props>;
