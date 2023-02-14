/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as locales from '@mui/material/locale';
import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { FC, ReactElement } from 'react';

import { THEME_ACT } from '@actinc/dls/styles/themeAct';
import { THEME_ACT_ET } from '@actinc/dls/styles/themeActEt';
import { THEME_ENCOURA_DATALAB } from '@actinc/dls/styles/themeEncouraDatalab';
import { THEME_ENCOURAGE_E4S } from '@actinc/dls/styles/themeEncourageE4S';

/**
 * # Theme configuration.
 *
 * There are a few supported themes of the DLS. These themes have the applied
 * styling for the variants. If neither of these completely solve your needs,
 * you can implement a custom Material UI theme.  This should be the last resort
 * as expanding the theme to support all use cases would be the preference.
 */

export interface ThemeProviderProps extends MuiThemeProviderProps {
  theme: 'ACT' | 'ACT_ET' | 'ENCOURA_DATALAB' | 'ENCOURAGE_E4S' | Theme;
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
export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  locale,
  ...themeProps
}: ThemeProviderProps): ReactElement<ThemeProviderProps> => {
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
    case 'ENCOURA_DATALAB':
      themeImpl = createTheme(
        THEME_ENCOURA_DATALAB,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ENCOURAGE_E4S':
      themeImpl = createTheme(
        THEME_ENCOURAGE_E4S,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    default:
      themeImpl = theme;
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider {...themeProps} theme={themeImpl} />
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
