/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { common } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { StandardCSSProperties } from '@mui/system';

import customDims from './customDims';
import palette, {
  black60,
  mist30,
  navyHover,
  seafoam,
  seafoam30,
} from './palette';
import shadows from './shadows';
import spacing, { SPACING_PX } from './spacing';
import typography, {
  BASE_FONT_SIZE,
  INPUT_FONT_SIZE,
  px,
  pxToNumber,
  secondaryFontFamily,
} from './typography';
import zIndex from './zIndex';

type BorderRadius = Pick<
  StandardCSSProperties,
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
>;

export const cssRadius = (value: number): BorderRadius => ({
  borderBottomLeftRadius: px(value),
  borderBottomRightRadius: px(value),
  borderRadius: px(value),
  borderTopLeftRadius: px(value),
  borderTopRightRadius: px(value),
});

export const LARGE_RADIUS_VALUE = 1000;

// This is way more than we actually need, but the browser will dial it back
// to an appropriate level, and we have a larger value here if we happen to
// have a larger component that needs it. This should cover a component up to
// height = 2 * borderRadius
export const LARGE_RADIUS = cssRadius(LARGE_RADIUS_VALUE);

// Base values found here:
// https://github.com/act-org/dls/blob/main/src/styles/themeActEt/components.ts
export const components: ThemeOptions['components'] = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        ':first-of-type': {
          ...cssRadius(0),
        },
        ':last-of-type': {
          ...cssRadius(0),
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      action: {
        paddingTop: '0',
      },
      icon: {
        height: '100%',
        marginBottom: 'auto',
        marginTop: px(2),
      },
      root: {
        ...cssRadius(4),
        alignItems: 'center',
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      position: 'static',
    },
    styleOverrides: {
      root: {
        ...cssRadius(0),
        boxShadow: 'unset',
        height: customDims.heights.header,
        position: 'relative',
        width: '100%',
        zIndex: zIndex.appBar,
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      endAdornment: {
        display: 'none',
      },
      inputRoot: {
        padding: spacing(0.5),
        paddingLeft: spacing(2),
      },
      popper: {
        paddingLeft: spacing(2.5),
        paddingRight: spacing(2.5),
      },
      tag: {
        marginLeft: spacing(0.5),
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        background: common.white,
      },
      rounded: {
        ...cssRadius(8),
      },
      square: {
        ...cssRadius(0),
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        background: palette.background.overlay,
      },
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      separator: {
        ...typography.body1,
        color: palette.text.over.light.medium,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      contained: {
        ...LARGE_RADIUS,
        '&:hover': {
          boxShadow: 'none',
        },
        boxShadow: 'none',
      },
      containedPrimary: {
        '&:disabled': {
          backgroundColor: palette.background.disabled,
          color: palette.primary.contrastText,
        },
        '&:hover': {
          backgroundColor: navyHover,
        },
      },
      outlined: {
        ...LARGE_RADIUS,
      },
      outlinedPrimary: {
        '&:disabled': {
          backgroundColor: palette.primary.contrastText,
          color: palette.background.disabled,
        },
        '&:hover': {
          backgroundColor: palette.action.hover,
          border: `1px solid ${palette.primary.light}`,
          color: palette.primary.main,
        },
        backgroundColor: palette.primary.contrastText,
        border: `1px solid ${palette.primary.light}`,
      },
      root: {
        height: undefined,
      },
      sizeLarge: {
        ...INPUT_FONT_SIZE,
        ...LARGE_RADIUS,
        height: undefined,
        paddingBottom: spacing(2),
        paddingLeft: spacing(6),
        paddingRight: spacing(6),
        paddingTop: spacing(2),
      },
      sizeMedium: {
        ...INPUT_FONT_SIZE,
        ...LARGE_RADIUS,
        paddingBottom: spacing(1),
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        paddingTop: spacing(1),
      },
      sizeSmall: {
        ...INPUT_FONT_SIZE,
        ...LARGE_RADIUS,
        height: undefined,
        paddingBottom: spacing(0.5),
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        paddingTop: spacing(0.5),
      },
      text: {
        '&:hover': {
          backgroundColor: palette.action.hover,
          border: `1px solid ${palette.primary.light}`,
        },
        // This is to keep the button from jumping around when we show the border on hover
        border: `1px solid transparent`,
      },
      // Adjust these padding sizes for text buttons to account for
      // the 1px (sometimes invisible) border, otherwise text buttons
      // become 2px taller than other buttons of the same size
      textSizeLarge: {
        paddingBottom: px(SPACING_PX * 2 - 1),
        paddingTop: px(SPACING_PX * 2 - 1),
      },
      textSizeMedium: {
        paddingBottom: px(SPACING_PX - 1),
        paddingTop: px(SPACING_PX - 1),
      },
      textSizeSmall: {
        paddingBottom: px(SPACING_PX * 0.5 - 1),
        paddingTop: px(SPACING_PX * 0.5 - 1),
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        ...INPUT_FONT_SIZE,
        ...LARGE_RADIUS,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        background: common.white,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      filled: {
        background: seafoam30,
        border: `1px solid ${seafoam}`,
      },
      label: {
        paddingBottom: 0,
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        paddingTop: 0,
      },
      root: {
        ...cssRadius(12),
        fontFamily: secondaryFontFamily,
        fontSize: 14,
        lineHeight: 20 / 14,
      },
      sizeMedium: {
        height: 20 + SPACING_PX * 2,
        paddingBottom: spacing(1),
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        paddingTop: spacing(1),
      },
      sizeSmall: {
        height: 20 + SPACING_PX,
        paddingBottom: spacing(0.5),
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: spacing(0.5),
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: 'lg',
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        margin: spacing(2),
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      fullWidth: {
        width: '100%',
      },
      root: {
        border: `1px solid ${palette.branding.mist}`,
        borderWidth: 1,
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      input: {
        '&:-webkit-autofill': {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },
      inputHiddenLabel: {
        paddingBottom: spacing(1.5),
        paddingTop: spacing(1.5),
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        marginTop: spacing(1),
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:disabled': {
          '&:hover': {
            color: palette.primary.main,
          },
        },
        '&:hover > svg': {
          opacity: 0.8,
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          background: mist30,
        },
        padding: spacing(1),
      },
      sizeSmall: {
        padding: spacing(1),
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      formControl: {
        position: undefined,
        transform: undefined,
      },
      outlined: {
        '&.MuiInputLabel-marginDense': {
          transform: undefined,
        },
        marginLeft: spacing(2.5),
        transform: undefined,
        transformOrigin: undefined,
      },
      root: {
        color: black60,
        fontFamily: secondaryFontFamily,
        fontSize: 14,
        fontWeight: typography.fontWeightMedium,
        letterSpacing: px(1),
        lineHeight: px(20),
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      bar: {
        background: palette.progress.ongoing,
      },
      root: {
        ...cssRadius(6),
        height: 12,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        ...BASE_FONT_SIZE,
        fontFamily: secondaryFontFamily,
        // fontWeight: 600, TODO: Verify with Katherine
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        // No radius here for these since these are usually menu items
        ...cssRadius(0),
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      adornedEnd: {
        paddingRight: spacing(3),
      },
      input: ({ ownerState }) => ({
        padding: `${spacing(1.5)} ${spacing(3)}`,
        ...(ownerState.startAdornment && {
          paddingRight: 0,
        }),
        ...(ownerState.endAdornment && {
          paddingRight: 0,
        }),
        ...(ownerState.multiline && {
          ...cssRadius(12),
        }),
      }),
      root: ({ ownerState }) => ({
        ...cssRadius(
          pxToNumber(BASE_FONT_SIZE.lineHeight) / 2 + SPACING_PX * 1.5,
        ),
        ...BASE_FONT_SIZE,
        '& legend': {
          marginLeft: spacing(2.5),
        },
        background: common.white,
        padding: 0,
        ...(ownerState.multiline && {
          ...cssRadius(12),
        }),
      }),
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 2,
    },
    styleOverrides: {
      elevation1: {
        boxShadow: shadows[1],
      },
      elevation2: {
        boxShadow: shadows[2],
      },
      // Add here as needed
      root: {
        ...cssRadius(0),
        background: palette.background.paper,
      },
      rounded: {
        // Paper needs a more subtle radius
        ...cssRadius(8),
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        top: 'unset',
      },
      select: {
        padding: '8.5px 14px',
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeSmall: {
        height: '16px',
        width: '16px',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        ...cssRadius(0),
        color: palette.branding.navy,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        background: palette.branding.teal,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      InputLabelProps: {
        shrink: true,
      },
      InputProps: {
        notched: true,
        size: 'medium',
      },
    },
    styleOverrides: {
      root: {
        marginBottom: 0,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        // Tooltips needs a more subtle radius
        ...cssRadius(6),
      },
    },
  },
};

export default components;
