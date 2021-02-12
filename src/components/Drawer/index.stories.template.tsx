/** @format */

import * as React from 'react';
import { Drawer, DrawerProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<DrawerProps> = args => {
  return <Drawer {...args}>some text</Drawer>;
};
export const argTypes = PlayGround({}, Drawer);
