/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  container: {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    userSelect: 'none',
  },
  inputRoot: {
    color: palette.text.primary,
    fontSize: 14,
  },
  menuItemRootSelected: {
    backgroundColor: grey[200],
  },
  selectIconRoot: {
    color: grey[200],
  },
  selectSelect: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: 'right',
    textAlignLast: 'right',
  },
  selectSelectInverted: {
    color: grey[200],
  },
  textFieldRoot: {
    margin: 0,
  },
}));
