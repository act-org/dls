/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { TypeText } from '@mui/material';
import { common, green, grey, red } from '@mui/material/colors';
import {
  alpha,
  lighten,
  PaletteOptions,
  recomposeColor,
} from '@mui/material/styles';

import { typeOk } from '@actinc/dls/helpers/types';

export const black60 = '#666666';
export const fuschia = '#d66bbd';
export const mist = '#c9d1d6';
// Tints, or lighter values, of each color are defined at 70%, 50%, and 30% of each base color.
export const mist30 = lighten(mist, 0.3);
export const navy = '#002d61';
export const navyHover = ' #566C8E';
export const neon = '#fbe232';
export const orange = '#eb6645';
export const seafoam = '#added1';
export const seafoam30 = lighten(seafoam, 0.3);
export const teal = '#00ada7';
export const watermelon = '#f94868';
export const yellow = neon;

export type CustomPaletteOptions = PaletteOptions & {
  action: PaletteOptions['action'] & {
    activeHover: string;
  };
  background: PaletteOptions['background'] & {
    inset: string;
    disabled: string;
    overlay: string;
  };
  branding: {
    fuschia: string;
    mist: string;
    navy: string;
    neon: string;
    orange: string;
    seafoam: string;
    teal: string;
    watermelon: string;
    yellow: string;
  };
  progress: {
    ongoing: string;
  };
  text: TypeText & {
    over: {
      dark: {
        medium: string;
        high: string;
      };
      light: {
        medium: string;
        high: string;
      };
    };
  };
};

const palette = typeOk<CustomPaletteOptions>()({
  action: {
    active: navy,
    activeHover: navyHover,
    hover: '#D9E0E7',
  },
  background: {
    default: recomposeColor({ type: 'rgba', values: [193, 200, 212, 0.2] }),
    disabled: '#828282',
    inset: grey[200],
    overlay: alpha(common.black, 0.38),
    paper: common.white,
  },
  branding: {
    fuschia,
    mist,
    navy,
    neon,
    orange,
    seafoam,
    teal,
    watermelon,
    yellow,
  },
  error: {
    main: red[700],
  },
  info: {
    main: common.white,
  },
  primary: {
    contrastText: common.white,
    light: '#4D6C90',
    main: navy,
  },
  progress: {
    failure: red[700],
    idle: grey[300],
    interrupted: orange,
    ongoing: fuschia,
    success: green[400],
  },
  secondary: {
    contrastText: navy,
    main: common.white,
  },
  success: {
    contrastText: '#2E7D32',
    main: '#e1e9e2',
  },
  text: {
    disabled: lighten(common.black, 0.25),
    over: {
      dark: {
        high: 'rgba(0, 0, 0, 0.87)',
        medium: 'rgba(0, 0, 0, 0.75)',
      },
      light: {
        high: common.black,
        medium: '#666666',
      },
    },
    primary: lighten(common.black, 0.13),
    secondary: grey[400],
  },
  warning: {
    main: red[700],
  },
});

export default palette;
