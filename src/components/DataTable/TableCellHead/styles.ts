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
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const ICON_SIZE = 14;

interface Args {
  color?: 'default' | 'primary' | 'secondary';
  sortBy?: string;
  sortIsApplied: boolean;
}

export default makeStyles(
  ({ customDims, palette, spacing, typography }: any) => ({
    sortContainerRoot: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: spacing(1),
      top: `calc(50% - ${ICON_SIZE}px)`,
      width: ICON_SIZE,
    },
    sortIconRoot: ({ color }: Args): any => ({
      color: clsx(
        color === 'default' && 'rgba(0, 0, 0, 0.35)',
        color === 'primary' &&
          Color(palette.primary.contrastText).fade(0.35).rgb().string(),
        color === 'secondary' &&
          Color(palette.secondary.contrastText).fade(0.35).rgb().string(),
      ),
      cursor: 'pointer',
      fontSize: typography.fontSize,
      height: ICON_SIZE,
      userSelect: 'auto',
      width: ICON_SIZE,
    }),
    tableCellRoot: ({ color, sortBy, sortIsApplied }: Args): any => {
      let cssProperties = {
        backgroundColor: clsx(
          color === 'default' && grey[300],
          color === 'primary' && palette.primary.main,
          color === 'secondary' && palette.secondary.main,
        ),
        border: 'none',
        boxSizing: 'border-box',
        height: customDims.heights.tableHeader,
        position: 'relative',
      } as React.CSSProperties;

      if (sortIsApplied) {
        cssProperties = {
          ...cssProperties,
          backgroundColor: clsx(
            color === 'default' && grey[400],
            color === 'primary' &&
              Color(palette.primary.main).darken(0.15).hex(),
            color === 'secondary' &&
              Color(palette.secondary.main).darken(0.15).hex(),
          ),
        } as React.CSSProperties;
      }

      if (sortBy) {
        cssProperties = {
          ...cssProperties,
          cursor: 'pointer',
          paddingRight: spacing(4),
        } as React.CSSProperties;
      }

      return cssProperties;
    },
    typographyRoot: ({ color }: Args): any => ({
      color: clsx(
        color === 'default' && palette.text.primary,
        color === 'primary' && palette.primary.contrastText,
        color === 'secondary' && palette.secondary.contrastText,
      ),
      fontSize: typography.body1.fontSize,
      fontWeight: typography.fontWeightMedium,
      lineHeight: 1,
      userSelect: 'none',
    }),
  }),
);
