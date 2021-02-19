/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';
import Plus from '../../icons/Plus';
import { PlayGround } from '../../helpers/argBlocks';

interface StoryProps extends ButtonProps {
  text: string;
}

export const argTypes = PlayGround(
  {
    color: {},
    disabled: {},
    fullWidth: {},
    onClick: { action: 'click' },
    size: {},
    text: {},
    type: {},
    variant: {},
  },
  Button,
);

export const Template: Story<StoryProps> = ({ text, ...args }) => {
  return <Button {...args}>{text}</Button>;
};

export const Icon = <Plus />;
