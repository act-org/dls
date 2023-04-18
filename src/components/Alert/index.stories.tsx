/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '@actinc/dls/helpers/playground';

import { Alert, AlertProps } from '.';

/**
 * The Alert component is used to notify the user of something. Our
 * implementation is based on the
 * <a href="https://mui.com/material-ui/react-alert/" target="_blank">Alert</a>
 * &nbsp;component from Material UI.
 */
export default {
  args: {
    children: 'Some alert description goes here.',
  },
  argTypes: Playground(
    {
      children: { type: 'string' },
      closeText: {},
      onClose: { action: 'close' },
      severity: {},
      title: { type: 'string' },
      variant: {},
    },
    Alert,
  ),
  component: Alert,
  tags: ['autodocs'],
  title: 'Atoms / Alert',
} as Meta<AlertProps>;

export const WithTitle: StoryObj<AlertProps> = {
  args: { title: 'Title Here' },
};

export const DescriptionOnly: StoryObj<AlertProps> = {
  args: { children: 'Some alert description goes here.' },
};

export const SuccessStandard: StoryObj<AlertProps> = {
  args: {
    severity: 'success',
    title: 'Success: Standard',
    variant: 'standard',
  },
};

export const SuccessFilled: StoryObj<AlertProps> = {
  args: {
    severity: 'success',
    title: 'Success: Filled',
    variant: 'filled',
  },
};

export const SuccessOutlined: StoryObj<AlertProps> = {
  args: {
    severity: 'success',
    title: 'Success: Outlined',
    variant: 'outlined',
  },
};

export const ErrorStandard: StoryObj<AlertProps> = {
  args: {
    severity: 'error',
    title: 'Error: Standard',
    variant: 'standard',
  },
};

export const ErrorFilled: StoryObj<AlertProps> = {
  args: {
    severity: 'error',
    title: 'Error: Filled',
    variant: 'filled',
  },
};

export const ErrorOutlined: StoryObj<AlertProps> = {
  args: {
    severity: 'error',
    title: 'Error: Outlined',
    variant: 'outlined',
  },
};

export const WarningStandard: StoryObj<AlertProps> = {
  args: {
    severity: 'warning',
    title: 'Warning: Standard',
    variant: 'standard',
  },
};

export const WarningFilled: StoryObj<AlertProps> = {
  args: {
    severity: 'warning',
    title: 'Warning: Filled',
    variant: 'filled',
  },
};

export const WarningOutlined: StoryObj<AlertProps> = {
  args: {
    severity: 'warning',
    title: 'Warning: Outlined',
    variant: 'outlined',
  },
};

export const InfoStandard: StoryObj<AlertProps> = {
  args: {
    severity: 'info',
    title: 'Info: Standard',
    variant: 'standard',
  },
};

export const InfoFilled: StoryObj<AlertProps> = {
  args: {
    severity: 'info',
    title: 'Info: Filled',
    variant: 'filled',
  },
};

export const InfoOutlined: StoryObj<AlertProps> = {
  args: {
    severity: 'info',
    title: 'Info: Outlined',
    variant: 'outlined',
  },
};
