/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';

export default makeStyles(({ typography }: any) => ({
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
    userSelect: 'auto',
  },
  tableCellRoot: {
    backgroundColor: COLORS.PRIMARY,
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
    backgroundColor: COLORS.PRIMARY_DARK,
  },
  typographyRoot: {
    color: 'white',
    fontSize: typography.fontSize, // FIXME 16
    fontWeight: typography.fontWeightMedium, // FIXME 500
    lineHeight: 1,
    userSelect: 'none',
  },
}));
