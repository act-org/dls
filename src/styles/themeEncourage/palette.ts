/* eslint-disable import/no-named-as-default-member */
/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypeText } from '@mui/material';
import { common, green, grey, red } from '@mui/material/colors';
import { alpha, lighten, PaletteOptions, recomposeColor } from '@mui/material/styles';

import colors from './colors';

/** @deprecated Not a part of the design system */
export const beige = '#fffbe0';
/** @deprecated Use `import { surface } from 'dls/../colors` - surface.black[60] */
export const black60 = colors.surface.black[60];
/** @deprecated Use `import { fuchsia } from 'dls/../colors` - fuchsia[100] */
export const fuschia = colors.fuchsia[100];
/** @deprecated Use `import { mist } from 'dls/../colors` - mist[100] */
export const mist = colors.mist[100];
/** @deprecated Use `import { mist } from 'dls/../colors` - mist[30] */
export const mist30 = colors.mist[30];
/** @deprecated Use `import { navy } from 'dls/../colors` - navy[100] */
export const navy = colors.navy[100];
/** @deprecated Use `import { navy } from 'dls/../colors` - navy[15] */
export const navy15 = colors.navy[15];
/** @deprecated Use `import { navy } from 'dls/../colors` - navy[100] */
export const navy30 = colors.navy[30];
/** @deprecated Not a part of the design system */
export const navyHover = ' #566C8E';
/** @deprecated Use `import { neon } from 'dls/../colors` - neon[100] */
export const neon = colors.neon[100];
/** @deprecated Use `import { orange } from 'dls/../colors` - orange[100] */
export const orange = colors.orange[100];
/** @deprecated Not a part of the design system */
export const paleBrown = '#d6dce0';
/** @deprecated Use `import { seafoam } from 'dls/../colors` - seafoam[100] */
export const seafoam = colors.seafoam[100];
/** @deprecated Use `import { seafoam } from 'dls/../colors` - seafoam[30] */
export const seafoam30 = colors.seafoam[30];
/** @deprecated Use `import { teal } from 'dls/../colors` - teal[100] */
export const teal = colors.teal[100];
/** @deprecated Renamed to `utility.savedCollegeHeartFill` https://www.figma.com/file/4JazmqwcfRVZyRq6vRkf05/E4S-Web---Design-System?type=design&node-id=1042-11958&mode=design&t=r8TW3rOvC7CAcP07-4 */
export const watermelon = colors.utility.savedCollegeHeartFill;
/** @deprecated Use `neon` not `yellow` */
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
  maintenance: {
    background: string;
    border: string;
  };
  progress: {
    failure: string;
    idle: string;
    interrupted: string;
    ongoing: string;
    success: string;
  };
  text: Partial<TypeText> & {
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

/** @deprecated Do not extend the base MUI palette */
export const customPalette = {
  action: {
    activeHover: navyHover,
  },
  background: {
    disabled: '#828282',
    inset: grey[200],
    overlay: alpha(common.black, 0.38),
  },
  /** @deprecated Use colors from `@encoura/dls/styles/themeEncourage/colors` */
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
  maintenance: {
    background: beige,
    border: paleBrown,
  },
  progress: {
    failure: red[700],
    idle: grey[300],
    interrupted: orange,
    ongoing: fuschia,
    success: green[400],
  },
  text: {
    /** @deprecated Use `text.primary`, `text.secondary` and `text.disabled` instead */
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
  },
} satisfies CustomPaletteOptions;

const palette = {
  action: {
    active: colors.navy[100],
    hover: colors.navy[15],
  },
  background: {
    default: recomposeColor({ type: 'rgba', values: [193, 200, 212, 0.2] }),
    paper: common.white,
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
  secondary: {
    contrastText: colors.navy[100],
    main: common.white,
  },
  success: {
    contrastText: '#2E7D32',
    main: '#e1e9e2',
  },
  text: {
    disabled: lighten(common.black, 0.25),
    primary: lighten(common.black, 0.13),
    secondary: grey[400],
  },
  warning: {
    main: red[700],
  },
} satisfies PaletteOptions;

export default palette;
