/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { styled } from '@mui/material/styles';
import { Typography, typographyClasses } from '@mui/material';

export const StyledContainer = styled('div')({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${typographyClasses.root}`]: {
    marginTop: theme.spacing(1),
  },
}));
