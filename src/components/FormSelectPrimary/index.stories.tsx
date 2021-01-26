/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import FormSelectPrimary, { Props } from '.';

const Template: Story<Props> = args => <FormSelectPrimary {...args} />;

//   disabled={boolean('Disabled?', false)}
//   labelProps={{
//     children: text('Label', 'Input Label'),
//     error: boolean('Error?', false),
//   }}
//   options={[
//     {
//       label: 'One',
//       value: 'ONE',
//     },
//     {
//       label: 'Two',
//       value: 'TWO',
//     },
//     {
//       label: 'Three',
//       value: 'THREE',
//     },
//   ]}
//   placeholder={text('Placeholder', 'Placeholder')}
//   placeholderIsDisabled={boolean('Disable Placeholder?', true)}
//   required={boolean('Required?', true)}
//   selectProps={{
//     onChange: (e: any): void => {
//       action('onChange()');

//       setValue(e.target.value);
//     },
//     style: {
//       width: 250,
//     },
//     value,
//   }}
// />

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  labelProps : {
    children: 'Input Label',
    disabled: false,
    error: false,
  },
  options: [
    {
      label: 'One',
      value: 'ONE',
    },
    {
      label: 'Two',
      value: 'TWO',
    },
    {
      label: 'Three',
      value: 'THREE',
    },
  ],
  placeholder: 'Placeholder',
  placeholderIsDisabled: true,
  required: true,
  selectProps: {
    style: {
      width: 250,
    },
  }
};

export default {
  component: FormSelectPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the FormSelect component.',
    },
  },
  title: 'Molecules/FormSelect',
} as Meta<Props>;
