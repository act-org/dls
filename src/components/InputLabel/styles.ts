/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles({
  labelRoot: {
    '& .label-help': {
      '& .MuiSvgIcon-root': {
        height: '.825em',
        marginLeft: '.1em',
        width: '.825em',
      },
      alignItems: 'flex-end',
      display: 'flex',
    },
    '& .label-split': {
      '& > .required': {
        fontSize: '.875rem',
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    position: 'relative',
  },
});
