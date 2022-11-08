/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import { Paper } from '@mui/material';
import { paperClasses } from '@mui/material/Paper';

import { styled } from '~/helpers/material/styled';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${paperClasses.root}`]: {
    border: `1px solid ${theme.palette.divider}`,
  },
}));
