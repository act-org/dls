/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StoryFn } from '@storybook/react';

import { Playground } from '@actinc/dls/helpers/playground';

import { InputLabel, InputLabelProps } from '.';

interface StoryProps extends InputLabelProps {
  /**
   * The default text for the label
   */
  text: string;
}

export const Template: StoryFn<StoryProps> = ({
  text,
  ...args
}: StoryProps) => <InputLabel {...args}>{text}</InputLabel>;

export const argTypes: Record<string, any> = Playground(
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
);

export const TipText = (
  <div>
    This is some advanced help text.
    <p>with multiple sections</p>
    <p>and a few paragraphs</p>
  </div>
);
