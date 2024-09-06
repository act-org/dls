/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import Grid2 from '@mui/material/Grid2';
import { Theme } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import Typography, { TypographyProps } from '@mui/material/Typography';
import clsx from 'clsx';
import Color from 'color';
import ChevronDown from '~/icons/ChevronDown';
import ChevronUp from '~/icons/ChevronUp';

import { createThemeStyled } from '~/helpers/styled';
import { typeOk } from '~/helpers/types';
import { ICustomDims } from '~/types';

const ICON_SIZE = 14;

interface IColorProp {
  $colorProp?: string;
}

const styled = createThemeStyled<Theme & ICustomDims>();

export const StyledChevronUp = styled(ChevronUp)<SvgIconProps & IColorProp>(
  ({ $colorProp, theme }) => ({
    color: clsx(
      $colorProp === 'default' && 'rgba(0, 0, 0, 0.35)',
      $colorProp === 'primary' &&
        Color(theme.palette.primary.contrastText).fade(0.35).rgb().string(),
      $colorProp === 'secondary' &&
        Color(theme.palette.secondary.contrastText).fade(0.35).rgb().string(),
    ),
    cursor: 'pointer',
    fontSize: theme.typography.fontSize,
    height: ICON_SIZE,
    userSelect: 'auto',
    width: ICON_SIZE,
  }),
);

export const StyledChevronDown = styled(ChevronDown)<SvgIconProps & IColorProp>(
  ({ $colorProp, theme }) => ({
    color: clsx(
      $colorProp === 'default' && 'rgba(0, 0, 0, 0.35)',
      $colorProp === 'primary' &&
        Color(theme.palette.primary.contrastText).fade(0.35).rgb().string(),
      $colorProp === 'secondary' &&
        Color(theme.palette.secondary.contrastText).fade(0.35).rgb().string(),
    ),
    cursor: 'pointer',
    fontSize: theme.typography.fontSize,
    height: ICON_SIZE,
    userSelect: 'auto',
    width: ICON_SIZE,
  }),
);

export const StyledGrid = styled(Grid2)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  right: theme.spacing(1),
  top: `calc(50% - ${ICON_SIZE}px)`,
  width: ICON_SIZE,
}));

export const StyledTableCell = styled(TableCell)<
  TableCellProps & {
    $sortBy?: string;
    $sortIsApplied?: boolean;
    color?: string;
  }
>(({ $sortBy, $sortIsApplied, color, theme }) => {
  let cssProperties = typeOk<React.CSSProperties>()({
    backgroundColor: clsx(
      color === 'default' && grey[200],
      color === 'primary' && theme.palette.primary.main,
      color === 'secondary' && theme.palette.secondary.main,
    ),
    border: 'none',
    boxSizing: 'border-box',
    height: theme.customDims.heights.tableHeader,
    position: 'relative',
  });

  if ($sortIsApplied) {
    cssProperties = typeOk<React.CSSProperties>()({
      ...cssProperties,
      backgroundColor: clsx(
        color === 'default' && grey[300],
        color === 'primary' &&
          Color(theme.palette.primary.main).darken(0.15).hex(),
        color === 'secondary' &&
          Color(theme.palette.secondary.main).darken(0.15).hex(),
      ),
    });
  }

  if ($sortBy) {
    cssProperties = typeOk<React.CSSProperties>()({
      ...cssProperties,
      cursor: 'pointer',
      paddingRight: theme.spacing(4),
    });
  }

  return cssProperties;
});

export const StyledTypography = styled(Typography)<
  TypographyProps & IColorProp
>(({ $colorProp, theme }) => ({
  color: clsx(
    $colorProp === 'default' && theme.palette.text.primary,
    $colorProp === 'primary' && theme.palette.primary.contrastText,
    $colorProp === 'secondary' && theme.palette.secondary.contrastText,
  ),
  fontSize: theme.typography.body1.fontSize,
  fontWeight: Number(theme.typography.fontWeightMedium),
  lineHeight: 1,
  userSelect: 'none',
}));
