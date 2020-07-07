/**
 * @prettier
 */

import * as React from 'react';

import createTheme from '~/styles/createTheme';
import red from '~/colors/red';

import ThemeProviderBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ThemeProviderBase
    theme={createTheme({
      palette: {
        primary: {
          dark: red[700],
          light: red[300],
          main: red[500],
        },
      },
    })}
  >
    ThemeProviderBase
  </ThemeProviderBase>
);

export default {
  component: ThemeProviderBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ThemeProvider component.',
    },
  },
  title: 'Atoms/ThemeProvider',
};
