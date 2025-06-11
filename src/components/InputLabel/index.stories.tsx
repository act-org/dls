/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { InputLabel, InputLabelProps } from '.';

/**
 * This component is the primary label for various form fields.  In general, when applicable, you should use
 * a molecule or organism that already contains this component to make it easier.  This would be used in a scenario where
 * a molecule does not exist for your use case.
 */
export default {
  args: {
    children: 'Some label',
  },
  argTypes: Playground(
    {
      color: {},
      disabled: {},
      error: {},
      helpPlacement: {},
      helpText: { type: 'string' },
      margin: {},
      required: {},
      text: {},
    },
    InputLabel,
  ),
  component: InputLabel,
  tags: ['autodocs'],
  title: 'Forms (WIP) / InputLabel',
} as Meta<InputLabelProps>;

export const Preview: StoryObj<InputLabelProps> = {
  args: {},
};

export const HelpTextString: StoryObj<InputLabelProps> = {
  args: {
    children: 'Label With Help',
    helpText: 'Simple Help Text',
  },
};

export const HelpTextHtml: StoryObj<InputLabelProps> = {
  args: {
    children: 'Label With Help',
    helpText: (
      <div>
        This is some advanced help text.
        <p>with multiple sections</p>
        <p>and a few paragraphs</p>
      </div>
    ),
  },
};
