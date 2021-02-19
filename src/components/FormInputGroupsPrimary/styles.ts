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
  gridContainerRoot: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  gridItemRoot: {
    flex: 1,
  },
});
