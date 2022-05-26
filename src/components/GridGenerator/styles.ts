/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { gridClasses } from '@mui/material/Grid';

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.container}`]: {
    marginBottom: theme.spacing(0.5),
  },
}));

export const StyledGridItem = styled(Grid)({
  [`&.${gridClasses.item}`]: {
    flex: 1,
  },
});
