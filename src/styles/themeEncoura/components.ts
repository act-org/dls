/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import { Components } from '@mui/material/styles';
import Color from 'color';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';

import COLORS, { secondaryMain } from './colors';

const COMPONENTS: Components = {
  [DLS_COMPONENT_NAMES.AREA_CHART]: {
    defaultProps: {
      colors: COLORS.CHART.primary,
    },
  },
  [DLS_COMPONENT_NAMES.BAR_CHART]: {
    defaultProps: {
      colors: COLORS.CHART.primary,
    },
  },
  [DLS_COMPONENT_NAMES.HEAT_MAP]: {
    defaultProps: {
      color: secondaryMain,
    },
  },
  [DLS_COMPONENT_NAMES.LINE_CHART]: {
    defaultProps: {
      colors: COLORS.CHART.primary,
    },
  },
  [DLS_COMPONENT_NAMES.MAP]: {
    defaultProps: {
      color: secondaryMain,
    },
  },
  [DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART]: {
    defaultProps: {
      colors: COLORS.CHART.quaternary,
    },
  },
  [DLS_COMPONENT_NAMES.PIE_CHART]: {
    defaultProps: {
      colors: COLORS.CHART.tertiary,
    },
  },
  [DLS_COMPONENT_NAMES.SCATTER_PLOT]: {
    defaultProps: {
      color: COLORS.CHART.secondary[1],
    },
  },
  [DLS_COMPONENT_NAMES.STACKED_BAR_CHART]: {
    defaultProps: {
      colors: COLORS.CHART.primary,
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        border: `1px solid ${grey[400]}`,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
        '&:hover': {
          backgroundColor: Color(THEME_ENCOURA_CLASSIC.palette.secondary.main)
            .fade(0.9)
            .rgb()
            .string(),
        },
      },
    },
  },
  MuiCalendarPicker: {
    styleOverrides: {
      root: {
        maxHeight: THEME_ENCOURA_CLASSIC.spacing(40),
        overflow: 'hidden',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '&[aria-selected="true"]': {
          backgroundColor: 'inherit',
        },
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontWeight: Number(THEME_ENCOURA_CLASSIC.typography.fontWeightLight),
      },
      root: {
        userSelect: 'none',
        wordWrap: 'break-word',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: COLORS.SECONDARY_LIGHT,
          color: COLORS.SECONDARY,
        },
        '&[aria-selected="true"]': {
          backgroundColor: 'transparent !important',
          color: COLORS.SECONDARY,
          cursor: 'auto',
        },
        color: COLORS.TEXT_PRIMARY,
        fontSize: THEME_ENCOURA_CLASSIC.typography.h4.fontSize,
        fontWeight: Number(THEME_ENCOURA_CLASSIC.typography.fontWeightLight),
      },
    },
  },
  MuiPopper: {
    styleOverrides: {
      root: {
        zIndex: THEME_ENCOURA_CLASSIC.zIndex.modal,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        top: '25%',
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        '& .Mui-checked+.MuiSwitch-track ': {
          backgroundColor: `${THEME_ENCOURA_CLASSIC.palette.info.main} !important`,
          opacity: '1 !important',
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '& a  > .MuiTableRow-root:not(.MuiTableRow-head):nth-child(odd)': {
          backgroundColor: 'inherit',
        },
        '& a:nth-child(even):hover ': {
          backgroundColor: THEME_ENCOURA_CLASSIC.palette.common.white,
        },
        '& a:nth-child(odd)': {
          backgroundColor: COLORS.TABLE.accentBackgroundColor,
        },
        '& a:nth-child(odd):hover': {
          backgroundColor: COLORS.TABLE.accentBackgroundColor,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      body: {
        color: COLORS.TEXT_PRIMARY,
        fontSize: `${Number(
          THEME_ENCOURA_CLASSIC.typography.body2.fontSize,
        )}px !important`,
        padding: THEME_ENCOURA_CLASSIC.spacing(2),
      },
      head: {
        backgroundColor: THEME_ENCOURA_CLASSIC.palette.common.white,
        borderLeft: 'none !important',
        borderRight: 'none !important',
        color: `${THEME_ENCOURA_CLASSIC.palette.secondary.dark} !important`,
        fontWeight: Number(THEME_ENCOURA_CLASSIC.typography.fontWeightBold),
        padding: THEME_ENCOURA_CLASSIC.spacing(2),
        userSelect: 'none',
      },
      root: {
        backgroundColor: 'transparent !important',
        borderBottom: 'none',
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        backgroundColor: THEME_ENCOURA_CLASSIC.palette.common.white,
        border: 'none !important',
        color: 'inherit',
        maxHeight: 'inherit',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      head: {
        backgroundColor: THEME_ENCOURA_CLASSIC.palette.common.white,
        position: 'sticky',
        top: 0,
      },
      root: {
        '&:not(.MuiTableRow-head):nth-child(even):hover': {
          backgroundColor: THEME_ENCOURA_CLASSIC.palette.common.white,
        },
        '&:not(.MuiTableRow-head):nth-child(odd)': {
          backgroundColor: COLORS.TABLE.accentBackgroundColor,
        },
        '&:not(.MuiTableRow-head):nth-child(odd):hover': {
          backgroundColor: COLORS.TABLE.accentBackgroundColor,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-input': {
          boxShadow: 'none !important',
          fontWeight: Number(THEME_ENCOURA_CLASSIC.typography.fontWeightLight),
        },
        '& .MuiInputLabel-outlined': {
          color: COLORS.TEXT_PRIMARY,
        },
        '& .MuiInputLabel-outlined.Mui-focused': {
          color: COLORS.SECONDARY,
        },
        '& .MuiOutlinedInput-input': {
          color: COLORS.TEXT_PRIMARY,
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: THEME_ENCOURA_CLASSIC.palette.grey[300],
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
          color: COLORS.TEXT_PRIMARY,
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: COLORS.SECONDARY,
          },
        '& .MuiOutlinedInput-root.Mui-focused .MuiSvgIcon-root': {
          color: COLORS.SECONDARY,
        },
        '&:hover .MuiInputLabel-outlined': {
          color: COLORS.SECONDARY,
        },
        '&:hover .MuiOutlinedInput-input': {
          color: COLORS.SECONDARY,
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS.SECONDARY,
        },
        '&:hover .MuiSvgIcon-root': {
          color: COLORS.SECONDARY,
        },
      },
    },
  },
} as Components;

export default COMPONENTS;
