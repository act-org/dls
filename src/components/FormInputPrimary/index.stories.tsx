/* eslint-disable sort-keys */
/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import FormInputPrimary, { Props } from '.';

const Template: Story<Props> = args => (<FormInputPrimary {...args} />);

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  disabled: false,
  errorMessage: '', 
  required: true,
  labelProps: {
    children: "Input Label"
  },
  inputProps: {
    autoFocus: true,
    placeholder: 'Placeholder',
    style: {
      width: 250,
    },
    type: 'text',
  }
  
}

export default {
  component: FormInputPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the FormInput component.',
    },
    argTypes: {
      inputProps: {
        onChange: {
          action: 'change',
        },
      }
    }
  },
  title: 'Molecules/FormInput',
} as Meta<Props>;
