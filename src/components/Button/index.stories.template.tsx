/** @format */

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
