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

export default makeStyles({
  emptyStateContainer: {
    padding: `${DIMS.LAYOUT_PADDING * 2.5}px ${DIMS.LAYOUT_PADDING}px
      ${DIMS.LAYOUT_PADDING}px ${DIMS.LAYOUT_PADDING}px`,
    width: '100%',
  },
});
