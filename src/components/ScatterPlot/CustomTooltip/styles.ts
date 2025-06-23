/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography, TypographyProps } from '@mui/material';
import { common } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import DLS_COMPONENT_SLOT_NAMES from '~/constants/DLS_COMPONENT_SLOT_NAMES';

export const StyledDataLabelTypography = styled(Typography, {
  name: DLS_COMPONENT_NAMES.SCATTER_PLOT,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.SCATTER_PLOT]
    .SCATTER_TOOLTIP_LABEL,
})({
  color: common.black,
});

export const StyledDataValueTypography = styled(Typography, {
  name: DLS_COMPONENT_NAMES.SCATTER_PLOT,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.SCATTER_PLOT]
    .SCATTER_TOOLTIP_TEXT,
})<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
}));
