/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, Story } from '@storybook/react/types-6-0';

import { ThemeProvider, ThemeProviderProps } from '.';

export const Preview: Story<ThemeProviderProps> = args => (
  <ThemeProvider {...args}>ThemeProvider</ThemeProvider>
);

export default {
  component: ThemeProvider,
  parameters: {
    info: {
      text: 'This is the primary variant of the ThemeProvider component.',
    },
  },
  title: 'Utilities/ThemeProvider',
} as Meta<ThemeProviderProps>;
