/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

import { DialogActions } from '@mui/material';
import { dialogActionsClasses } from '@mui/material/DialogActions';

import { styled } from '~/helpers/styled';

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  [`&.${dialogActionsClasses.root}`]: {
    padding: theme.spacing(2),
  },
}));
