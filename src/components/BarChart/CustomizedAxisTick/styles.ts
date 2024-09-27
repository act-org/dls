/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import DLS_COMPONENT_SLOT_NAMES from '~/constants/DLS_COMPONENT_SLOT_NAMES';

export const StyledTypography = styled(Typography, {
  name: DLS_COMPONENT_NAMES.BAR_CHART,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.BAR_CHART].Y_AXIS_LABEL,
})(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));
