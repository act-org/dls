/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { styled } from '@mui/material/styles';
import { DialogActions, dialogActionsClasses } from '@mui/material';

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  [`&.${dialogActionsClasses.root}`]: {
    padding: theme.spacing(2),
  },
}));
