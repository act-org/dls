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

import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';

import COLORS from './colors';

const COMPONENTS: Components = {
  DlsAreaChart: {
    defaultProps: {
      colors: [
        COLORS.CUSTOM.chart.primary.first,
        COLORS.CUSTOM.chart.primary.second,
        COLORS.CUSTOM.chart.primary.third,
        COLORS.CUSTOM.chart.primary.fourth,
        COLORS.CUSTOM.chart.primary.fifth,
        COLORS.CUSTOM.chart.primary.sixth,
      ],
    },
  },
  DlsBarChart: {
    defaultProps: {
      colors: [
        COLORS.CUSTOM.chart.primary.first,
        COLORS.CUSTOM.chart.primary.second,
        COLORS.CUSTOM.chart.primary.third,
        COLORS.CUSTOM.chart.primary.fourth,
        COLORS.CUSTOM.chart.primary.fifth,
        COLORS.CUSTOM.chart.primary.sixth,
      ],
    },
  },
  DlsLineChart: {
    defaultProps: {
      colors: [
        COLORS.CUSTOM.chart.primary.first,
        COLORS.CUSTOM.chart.primary.second,
        COLORS.CUSTOM.chart.primary.third,
        COLORS.CUSTOM.chart.primary.fourth,
        COLORS.CUSTOM.chart.primary.fifth,
        COLORS.CUSTOM.chart.primary.sixth,
      ],
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
          backgroundColor: COLORS.CUSTOM.table.accentBackgroundColor,
        },
        '& a:nth-child(odd):hover': {
          backgroundColor: COLORS.CUSTOM.table.accentBackgroundColor,
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
          backgroundColor: COLORS.CUSTOM.table.accentBackgroundColor,
        },
        '&:not(.MuiTableRow-head):nth-child(odd):hover': {
          backgroundColor: COLORS.CUSTOM.table.accentBackgroundColor,
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
