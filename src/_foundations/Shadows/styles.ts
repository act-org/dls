/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import Grid2, { grid2Classes } from '@mui/material/Grid2';

import { styled } from '~/helpers/styled';

export const StyledGrid = styled(Grid2)(({ theme }) => ({
  [`&.${grid2Classes.root}`]: {
    marginBottom: theme.spacing(10),
  },
}));
