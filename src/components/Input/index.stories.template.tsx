/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Input, InputProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<InputProps> = args => {
  return (
    <Input
      {...args}
    />
  );
};

export const argTypes: Record<string, any> = PlayGround({
  autoFocus: {},
  color: {},
  disabled: {},
  error: {},
  multiline: {},
  placeholder: {},
  required: {},
  value: {type: 'string'},
  variant: {}
}, Input);
