/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StyledComponent } from '@emotion/styled';
import Grid, { gridClasses, GridProps } from '@mui/material/Grid';

import { styled } from '~/helpers/material/styled';

export const StyledGridContainer: StyledComponent<GridProps> = styled(Grid)(
  ({ theme }) => ({
    [`&.${gridClasses.container}`]: {
      marginBottom: theme.spacing(0.5),
    },
  }),
);

export const StyledGridItem: StyledComponent<GridProps> = styled(Grid)({
  [`&.${gridClasses.item}`]: {
    flex: 1,
  },
});
