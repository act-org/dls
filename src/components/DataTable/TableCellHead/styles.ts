/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import clsx from 'clsx';
import Color from 'color';
import { grey } from '@mui/material/colors';
import {
  Grid,
  GridProps,
  SvgIconProps,
  TableCell,
  TableCellProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ChevronDown from '~/icons/ChevronDown';
import ChevronUp from '~/icons/ChevronUp';
import { StyledComponent } from '@emotion/styled';

const ICON_SIZE = 14;

export const StyledChevronUp = styled(ChevronUp)<
  SvgIconProps & {
    colorProp?: string;
  }
>(({ colorProp, theme }): any => ({
  color: clsx(
    colorProp === 'default' && 'rgba(0, 0, 0, 0.35)',
    colorProp === 'primary' &&
    Color(theme.palette.primary.contrastText).fade(0.35).rgb().string(),
    colorProp === 'secondary' &&
    Color(theme.palette.secondary.contrastText).fade(0.35).rgb().string(),
  ),
  cursor: 'pointer',
  fontSize: theme.typography.fontSize,
  height: ICON_SIZE,
  userSelect: 'auto',
  width: ICON_SIZE,
}));

export const StyledChevronDown = styled(ChevronDown)<
  SvgIconProps & {
    colorProp?: string;
  }
>(({ colorProp, theme }): any => ({
  color: clsx(
    colorProp === 'default' && 'rgba(0, 0, 0, 0.35)',
    colorProp === 'primary' &&
    Color(theme.palette.primary.contrastText).fade(0.35).rgb().string(),
    colorProp === 'secondary' &&
    Color(theme.palette.secondary.contrastText).fade(0.35).rgb().string(),
  ),
  cursor: 'pointer',
  fontSize: theme.typography.fontSize,
  height: ICON_SIZE,
  userSelect: 'auto',
  width: ICON_SIZE,
}));

export const StyledGrid: StyledComponent<GridProps> = styled(Grid)(
  ({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: theme.spacing(1),
    top: `calc(50% - ${ICON_SIZE}px)`,
    width: ICON_SIZE,
  }),
);

export const StyledTableCell = styled(TableCell)<
  TableCellProps & {
    color?: string;
    sortBy?: string;
    sortIsApplied?: boolean;
  }
>(({ color, sortBy, sortIsApplied, theme }): any => {
  let cssProperties = {
    backgroundColor: clsx(
      color === 'default' && grey[200],
      color === 'primary' && theme.palette.primary.main,
      color === 'secondary' && theme.palette.secondary.main,
    ),
    border: 'none',
    boxSizing: 'border-box',
    // FIXME:
    height: (theme as any).customDims.heights.tableHeader,
    position: 'relative',
  } as React.CSSProperties;

  if (sortIsApplied) {
    cssProperties = {
      ...cssProperties,
      backgroundColor: clsx(
        color === 'default' && grey[300],
        color === 'primary' &&
        Color(theme.palette.primary.main).darken(0.15).hex(),
        color === 'secondary' &&
        Color(theme.palette.secondary.main).darken(0.15).hex(),
      ),
    } as React.CSSProperties;
  }

  if (sortBy) {
    cssProperties = {
      ...cssProperties,
      cursor: 'pointer',
      paddingRight: theme.spacing(4),
    } as React.CSSProperties;
  }

  return cssProperties;
});

export const StyledTypography = styled(Typography)<
  TypographyProps & {
    colorProp?: string;
  }
>(({ colorProp, theme }) => ({
  color: clsx(
    colorProp === 'default' && theme.palette.text.primary,
    colorProp === 'primary' && theme.palette.primary.contrastText,
    colorProp === 'secondary' && theme.palette.secondary.contrastText,
  ),
  fontSize: theme.typography.body1.fontSize,
  fontWeight: Number(theme.typography.fontWeightMedium),
  lineHeight: 1,
  userSelect: 'none',
}));
