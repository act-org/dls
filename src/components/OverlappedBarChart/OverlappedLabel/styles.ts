/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import { styled } from '@mui/material/styles';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import DLS_COMPONENT_SLOT_NAMES from '~/constants/DLS_COMPONENT_SLOT_NAMES';

export const StyledText = styled('text', {
  name: DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART]
    .BAR_LABELS,
})(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: Number(theme.typography.fontWeightBold),
}));
