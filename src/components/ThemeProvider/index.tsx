/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as locales from '@material-ui/core/locale';
import * as React from 'react';
import {
  createTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
  ThemeProviderProps as MuiThemeProviderProps,
} from '@material-ui/core/styles';

import { THEME_ACT } from '~/styles/themeAct';
import { THEME_ACT_ET } from '~/styles/themeActEt';

/**
 * # Theme configuration.
 *
 * There are a few supported themes of the DLS. These themes have the applied
 * styling for the variants. If neither of these completely solve your needs,
 * you can implement a custom Material UI theme.  This should be the last resort
 * as expanding the theme to support all use cases would be the preference.
 */

export interface ThemeProviderProps extends MuiThemeProviderProps {
  theme: 'ACT' | 'ACT_ET' | Theme;
  locale?:
    | 'azAZ'
    | 'bgBG'
    | 'caES'
    | 'csCZ'
    | 'deDE'
    | 'enUS'
    | 'esES'
    | 'etEE'
    | 'faIR'
    | 'fiFI'
    | 'frFR'
    | 'heIL'
    | 'hiIN'
    | 'huHU'
    | 'hyAM'
    | 'idID'
    | 'isIS'
    | 'itIT'
    | 'jaJP'
    | 'koKR'
    | 'nlNL'
    | 'plPL'
    | 'ptBR'
    | 'ptPT'
    | 'roRO'
    | 'ruRU'
    | 'skSK'
    | 'svSE'
    | 'trTR'
    | 'ukUA'
    | 'viVN'
    | 'zhCN';
}

/**
 * # Theme Provider
 *
 * description
 *
 * @param themeProps
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  locale,
  ...themeProps
}: ThemeProviderProps): React.ReactElement<ThemeProviderProps> => {
  let themeImpl: Theme;
  switch (theme) {
    case 'ACT':
      themeImpl = createTheme(
        THEME_ACT,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ACT_ET':
      themeImpl = createTheme(
        THEME_ACT_ET,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    default:
      themeImpl = theme;
  }

  return <MuiThemeProvider {...themeProps} theme={themeImpl} />;
};

export default ThemeProvider;
