/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Color from 'color';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

interface Args {
  color?: 'primary' | 'secondary';
  sortBy?: string;
  sortIsApplied: boolean;
}

export default makeStyles(({ customDims, palette, typography }: any) => ({
  sortContainerRoot: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: 10,
    top: `calc(50% - 14px)`,
    width: 14,
  },
  sortIconRoot: ({ color }: Args): any => ({
    color:
      color === 'secondary'
        ? 'rgba(0, 0, 0, 0.35)'
        : 'rgba(255, 255, 255, 0.35)',
    cursor: 'pointer',
    fontSize: typography.fontSize,
    height: 14,
    userSelect: 'auto',
    width: 14,
  }),
  tableCellRoot: ({ color, sortBy, sortIsApplied }: Args): any => {
    let cssProperties = {
      backgroundColor: color === 'secondary' ? grey[300] : palette.primary.main,
      border: 'none',
      boxSizing: 'border-box',
      height: customDims.heights.tableHeader,
      position: 'relative',
    } as React.CSSProperties;

    if (sortIsApplied) {
      cssProperties = {
        ...cssProperties,
        backgroundColor:
          color === 'secondary'
            ? grey[400]
            : Color(palette.primary.main).darken(0.15).hex(),
      } as React.CSSProperties;
    }

    if (sortBy) {
      cssProperties = {
        ...cssProperties,
        cursor: 'pointer',
        paddingRight: 30,
      } as React.CSSProperties;
    }

    return cssProperties;
  },
  typographyRoot: ({ color }: Args): any => ({
    color: color === 'secondary' ? palette.text.primary : palette.common.white,
    fontSize: 16,
    fontWeight: typography.fontWeightMedium,
    lineHeight: 1,
    userSelect: 'none',
  }),
}));
