/** @format */

import * as React from 'react';
import { IconButton, IconButtonProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';
import { PencilCircle } from '../../icons';

export const Template: Story<IconButtonProps> = args => {
  return (
    <IconButton {...args}>
      <PencilCircle />
    </IconButton>
  );
};
export const argTypes = PlayGround(
  {
    color: {},
    size: {},
    edge: {},
    onClick: { action: 'click' },
    disabled: {},
  },
  IconButton,
);
