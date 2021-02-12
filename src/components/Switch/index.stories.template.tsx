/** @format */

import * as React from 'react';
import { Switch, SwitchProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<SwitchProps> = args => {
  return <Switch {...args} />;
};
export const argTypes = PlayGround(
  {
    size: {},
    color: {},
    disabled: {},
    checked: {},
  },
  Switch,
);
