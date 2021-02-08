/**
 * @prettier
 */

import * as React from 'react';
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
  ThemeProviderProps as MuiThemeProviderProps,
} from '@material-ui/core/styles';
import actTheme from '~/styles/act-theme';
import actEtTheme from '~/styles/act-et-theme';

export interface ThemeProviderProps extends MuiThemeProviderProps {
  theme: 'act' | 'act-et';
}

/**
 * # Theme Provider
 *
 * description
 *
 * @param themeProps
 */
export function ThemeProvider({
  theme,
  ...themeProps
}: ThemeProviderProps): React.ReactElement<ThemeProviderProps> {
  let themeImpl: Theme;
  switch (theme) {
    case 'act':
      themeImpl = actTheme;
      break;
    case 'act-et':
      themeImpl = actEtTheme;
      break;
  }
  return <MuiThemeProvider {...themeProps} theme={themeImpl} />;
}
