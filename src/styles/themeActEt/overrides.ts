/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import COLORS from './colors';

const OVERRIDES = {
  MuiAlert: {
    closeText: 'Close',
    outlinedError: {
      color: COLORS.ERROR_DARK,
    },
    outlinedInfo: {
      color: COLORS.INFO_DARK,
    },
    outlinedSuccess: {
      color: COLORS.SUCCESS_DARK,
    },
    outlinedWarning: {
      color: COLORS.WARNING_DARK,
    },
    severity: 'info',
    variant: 'standard',
  },
};

export default OVERRIDES;
