/**
 * @prettier
 */

import * as React from 'react';

import ThemeProviderPrimary from '.';

export const Primary = (): React.ReactElement<any> => (
  <ThemeProviderPrimary>ThemeProviderPrimary</ThemeProviderPrimary>
);

export default {
  component: ThemeProviderPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the ThemeProvider component.',
    },
  },
  title: 'Atoms/ThemeProvider',
};
