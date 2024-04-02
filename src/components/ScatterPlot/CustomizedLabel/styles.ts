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

interface CustomizedLabelProps {
  fill?: string;
  opacity?: number;
}

export const StyledLabel = styled('div', {
  name: DLS_COMPONENT_NAMES.SCATTER_PLOT,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.SCATTER_PLOT]
    .SCATTER_LABELS,
})<CustomizedLabelProps>(({ fill, opacity }) => ({
  color: fill,
  fill,
  opacity,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  userSelect: 'none',
  whiteSpace: 'nowrap',
}));
