/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';

export default makeStyles(({ palette, typography }: any) => ({
  sortContainerRoot: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: 10,
    top: `calc(50% - 14px)`,
    width: 14,
  },
  sortIconRoot: {
    color: 'rgba(255, 255, 255, 0.35)',
    cursor: 'pointer',
    fontSize: typography.fontSize, // FIXME 14
    height: 14,
    userSelect: 'auto',
    width: 14,
  },
  tableCellRoot: {
    backgroundColor: palette.primary.main,
    border: 'none',
    boxSizing: 'border-box',
    height: DIMS.HEIGHTS.TABLE_HEADER,
    position: 'relative',
  },
  tableCellRootSortable: {
    cursor: 'pointer',
    paddingRight: 30,
  },
  tableCellRootSortApplied: {
    backgroundColor: palette.primary.dark,
  },
  typographyRoot: {
    color: 'white',
    fontSize: 16,
    fontWeight: typography.fontWeightMedium,
    lineHeight: 1,
    userSelect: 'none',
  },
}));
