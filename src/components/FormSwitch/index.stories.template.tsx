/** @format */

import * as React from 'react';
import { FormSwitch, FormSwitchProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<FormSwitchProps> = args => {
  return <FormSwitch {...args} />;
};
export const argTypes = PlayGround(
  {
    checked: {},
    disabled: {},
    id: {},
    label: { type: 'string' },
    labelPlacement: {},
    onChange: { action: 'change' },
  },
  FormSwitch,
);
