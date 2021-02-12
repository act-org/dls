/**
 * /* eslint-disable sort-keys
 *
 * @format
 */

/**
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { InputLabel, InputLabelProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

interface DocProps extends InputLabelProps {
  /**
   * The default text for the label
   */
  text: string;
}

export const Template: Story<DocProps> = ({ text, ...args }) => (
  <InputLabel {...args}>{text}</InputLabel>
);

export const argTypes: Record<string, any> = PlayGround(
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
