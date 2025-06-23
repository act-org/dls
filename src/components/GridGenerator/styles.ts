/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Grid, { gridClasses, GridProps } from '@mui/material/Grid';

import { styled } from '~/helpers/styled';

export const StyledGridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  [`&.${gridClasses.container}`]: {
    marginBottom: theme.spacing(0.5),
  },
}));

export const StyledGridItem = styled(Grid)<GridProps>({
  [`&.${gridClasses.root}`]: {
    flex: 1,
  },
});
