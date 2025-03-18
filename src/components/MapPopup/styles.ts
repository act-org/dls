/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Popup } from 'react-map-gl/mapbox';

export const StyledPopup = styled(Popup)(({ theme }) => ({
  maxWidth: '400px !important',
  paddingRight: theme.spacing(1, 1.5),
  pointerEvents: 'none',
  zIndex: 1000,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: grey[700],
  padding: theme.spacing(0.25),
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  float: 'right',
  fontWeight: Number(theme.typography.fontWeightRegular),
  marginLeft: theme.spacing(1),
}));
