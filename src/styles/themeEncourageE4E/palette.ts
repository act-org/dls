/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable sort-keys */

import { common, green, grey, red, yellow } from '@mui/material/colors';
import { PaletteOptions, recomposeColor } from '@mui/material/styles';

import { figmaColorGenerator, generatePaletteColors } from './helpers';

export const COLOR_PALETTE = [
  { colorHEX: '#00ada7', colorName: 'teal' },
  { colorHEX: '#002d61', colorName: 'navy' },
  { colorHEX: '#fbe232', colorName: 'neon' },
  { colorHEX: '#eb6645', colorName: 'orange' },
  { colorHEX: '#added1', colorName: 'seafoam' },
  { colorHEX: '#d66bbd', colorName: 'fuchsia' },
  { colorHEX: '#c9d1d6', colorName: 'mist' },
  { colorHEX: '#255bba', colorName: 'sapphire' },
  { colorHEX: '#c7d0d8', colorName: 'surface' },
];

export const utilityError = figmaColorGenerator('#ff5252');
export const utilityInfo = figmaColorGenerator('#2196f3');
export const utilitySuccess = figmaColorGenerator('#4cAf50');
export const utilityWarning = figmaColorGenerator('#FFC107');

export const paletteColors = generatePaletteColors(COLOR_PALETTE);
export const almostBlack = '#2d3032';
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
  branding: typeof paletteColors;
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
    scrim: recomposeColor({ type: 'rgba', values: [45, 48, 50, 0.65] }),
  },
  branding: {
    ...paletteColors,
    surface: {
      ...paletteColors.surface,
      almostBlack,
    },
  },
  info: {
    main: common.white,
  },
  progress: {
    failure: red[700],
    idle: grey[300],
    interrupted: paletteColors.orange[600],
    success: green[400],
  },
  text: {
    overDark: {
      disabled: recomposeColor({ type: 'rgba', values: [244, 244, 244, 0.35] }),
      high: '#FFFFFF',
      medium: recomposeColor({ type: 'rgba', values: [244, 244, 244, 0.7] }),
    },
    overLight: {
      disabled: recomposeColor({ type: 'rgba', values: [0, 0, 0, 0.26] }),
      high: recomposeColor({ type: 'rgba', values: [0, 0, 0, 0.87] }),
      medium: recomposeColor({ type: 'rgba', values: [0, 0, 0, 0.6] }),
    },
  },
  utility: {
    error: utilityError,
    info: utilityInfo,
    restingState: 'rgba(63, 81, 181, 0.5)',
    success: utilitySuccess,
    warning: utilityWarning,
    white: '#ffffff',
  },
};

export default palette;
