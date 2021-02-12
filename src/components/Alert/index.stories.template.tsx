/** @format */

import * as React from 'react';
import { Alert, AlertProps, AlertTitle } from '.';
import { Story } from '@storybook/react/types-6-0';
import { PlayGround } from '../../helpers/argBlocks';

interface DocProps extends AlertProps {
  text: string;
}

export const Template: Story<DocProps> = ({ text, ...args }) => (
  <Alert {...args}>{text}</Alert>
);

export const argTypes = PlayGround(
  {
    alertTitle: { type: 'string' },
    closeText: {},
    onClose: { action: 'close' },
    severity: {},
    text: {},
    variant: {},
  },
  Alert,
);
