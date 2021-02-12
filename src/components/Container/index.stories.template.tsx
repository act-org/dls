/** @format */

import * as React from 'react';
import { Container, ContainerProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<ContainerProps> = args => {
  return <Container {...args}>some text</Container>;
};
export const argTypes = PlayGround({}, Container);
