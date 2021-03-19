/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FormRadioGroup, FormRadioGroupProps } from '.';
import { action } from '@storybook/addon-actions';
import { PlayGround } from '~/helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<FormRadioGroupProps> = args => {
  const [state, setState] = useState<string>('one');
  const clickAction = action('click');
  return (
    <FormRadioGroup
      onChange={(event, value): void => {
        setState(value);
        clickAction(event, value);
      }}
      value={state}
      {...args}
    />
  );
};
export const argTypes = PlayGround(
  {
    label: { type: 'string' },
    name: {},
    options: {},
    row: {},
    helpText: {},
  },
  FormRadioGroup,
);
