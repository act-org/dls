/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  contained: {},
  default: {
    maxHeight: 40,
    padding: '11px 22px',
    fontSize: '1em',
  },
  label: {
    textTransform: 'none',
  },
  large: {
    maxHeight: 54,
    fontSize: '1.125em',
    padding: '16px 24px',
  },
  outlined: {},
  small: {
    maxHeight: 32,
    padding: '7px 16px',
    fontSize: '0.875em',
  },
});
