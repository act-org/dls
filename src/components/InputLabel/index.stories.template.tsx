/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { InputLabel, InputLabelProps } from '.';

interface StoryProps extends InputLabelProps {
  /**
   * The default text for the label
   */
  text: string;
}

export const Template: Story<StoryProps> = ({ text, ...args }: StoryProps) => (
  <InputLabel {...args}>{text}</InputLabel>
);

export const argTypes: Record<string, any> = Playground(
  {
    text: {},
    color: {},
    disabled: {},
    error: {},
    helpText: { type: 'string' },
    helpPlacement: {},
    margin: {},
    required: {},
  },
  InputLabel,
);

export const TipText = (
  <div>
    This is some advanced help text.
    <p>with multiple sections</p>
    <p>and a few paragraphs</p>
  </div>
);
