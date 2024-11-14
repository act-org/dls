/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Grid2, { grid2Classes, Grid2Props } from '@mui/material/Grid2';

import { styled } from '~/helpers/styled';

export const StyledGridContainer = styled(Grid2)<Grid2Props>(({ theme }) => ({
  [`&.${grid2Classes.container}`]: {
    marginBottom: theme.spacing(0.5),
  },
}));

export const StyledGridItem = styled(Grid2)<Grid2Props>({
  [`&.${grid2Classes.root}`]: {
    flex: 1,
  },
});
