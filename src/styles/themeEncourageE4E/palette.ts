/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable sort-keys */

import { common, green, grey, red, yellow } from '@mui/material/colors';
import { PaletteOptions, recomposeColor } from '@mui/material/styles';

import colors from '~/styles/themeEncourageE4E/colors';

interface IOverColor {
  disabled: string;
  high: string;
  medium: string;
}

export type CustomPaletteOptions = PaletteOptions & {
  action: {
    activeHover: string;
  };
  background: PaletteOptions['background'] & {
    scrim: string;
  };
  branding: Omit<typeof colors, 'utility'>;
  progress: {
    failure: string;
    idle: string;
    interrupted: string;
    success: string;
  };
  text: PaletteOptions['text'] & {
    overDark: IOverColor;
    overLight: IOverColor;
  };
  utility: {
    error: Record<number, string>;
    info: Record<number, string>;
    restingState: string;
    success: Record<number, string>;
    warning: Record<number, string>;
    white: string;
  };
};

export const palette: CustomPaletteOptions = {
  action: {
    active: yellow[900],
    activeHover: yellow[800],
    hover: common.white,
  },
  background: {
    default: 'rgb(82, 95, 101)',
    scrim: recomposeColor({ type: 'rgba', values: [45, 48, 50, 0.65] }), // #2D3032 65%,
  },
  branding: {
    ...colors,
  },
  info: {
    main: common.white,
  },
  progress: {
    failure: red[700],
    idle: grey[300],
    // eslint-disable-next-line import/no-named-as-default-member
    interrupted: colors.orange[100],
    success: green[400],
  },
  text: {
    overDark: {
      disabled: recomposeColor({ type: 'rgba', values: [244, 244, 244, 0.35] }), // #F4F4F4 35%
      high: '#FFFFFF',
      medium: recomposeColor({ type: 'rgba', values: [244, 244, 244, 0.7] }), // #F4F4F4 70%
    },
    overLight: {
      disabled: recomposeColor({ type: 'rgba', values: [0, 0, 0, 0.26] }), // #000000 26%
      high: recomposeColor({ type: 'rgba', values: [0, 0, 0, 0.87] }), // #000000 60%
      medium: recomposeColor({ type: 'rgba', values: [0, 0, 0, 0.6] }), // #000000 87%
    },
  },
  // eslint-disable-next-line import/no-named-as-default-member
  utility: colors.utility,
};

export default palette;
