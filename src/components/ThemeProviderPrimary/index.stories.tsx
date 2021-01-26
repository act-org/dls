/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ThemeProviderPrimary, { Props } from '.';

export const Primary: Story<Props> = args => (
  <ThemeProviderPrimary {...args}>ThemeProviderPrimary</ThemeProviderPrimary>
);

export default {
  component: ThemeProviderPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the ThemeProvider component.',
    },
  },
  title: 'Utilities/ThemeProvider',
} as Meta<Props>;
