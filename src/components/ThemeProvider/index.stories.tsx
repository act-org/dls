/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ThemeProvider, ThemeProviderProps } from '.';

export const Primary: Story<ThemeProviderProps> = args => (
  <ThemeProvider {...args}>ThemeProviderPrimary</ThemeProvider>
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
