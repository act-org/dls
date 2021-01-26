/* eslint-disable sort-keys */
/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import InputLabelPrimary, { Props } from '.';

export default {
  component: InputLabelPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the InputLabel component.',
    },
  },
  title: 'Atoms/InputLabel',
  argTypes: {
    color: {
      control: { 
        type: 'select',
        options: [
          'primary',
          'secondary'
        ]
      }
    }
  }
} as Meta<Props>;

type DocProps = Props & { text: string };
// eslint-disable-next-line react/prop-types
const Template: Story<DocProps> = ({ text, ...args }) => (
  <InputLabelPrimary {...args}>{text}</InputLabelPrimary>
);
export const Primary: Story<DocProps> = Template.bind({});
// eslint-disable-next-line immutable/no-mutation
Primary.args = {
  text: 'Input Label',
  required: false,
  disabled: false,
  error: false,
  color: "primary"
  
} as DocProps;

/*
export const Primary = (): React.ReactElement<Props> => (
  <InputLabelPrimary
    color={select(
      'Color',
      {
        Primary: 'primary',
        Secondary: 'secondary',
      },
      'primary',
    )}
    disabled={boolean('Disabled?', false)}
    error={boolean('Error?', false)}
    required={boolean('Required?', true)}
    style={{
      width: 300,
    }}
  >
    {text('Label', 'Input Label')}
  </InputLabelPrimary>
);
*/