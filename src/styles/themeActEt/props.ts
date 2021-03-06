/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { ComponentsProps } from '@material-ui/core/styles/props';

const PROPS: ComponentsProps = {
  MuiAlert: {
    closeText: 'Close',
    severity: 'info' as any,
    variant: 'standard' as any,
  },
  MuiButton: {
    variant: 'outlined' as any,
  },
  MuiPaper: {
    elevation: 3,
  },
};

export default PROPS;
