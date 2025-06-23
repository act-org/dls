/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { styled } from '@mui/material/styles';
import { ResponsiveContainer } from 'recharts';

interface ContainerType {
  height?: number | string;
  maxHeight?: number | string;
  width?: number | string;
}

export const StyledContainer = styled('div')<ContainerType>(
  ({ height, maxHeight, width }) => ({
    height,
    maxHeight: maxHeight || 'none',
    overflow: 'auto',
    position: 'relative',
    width,
  }),
);

export const StyledResponsiveContainer = styled(ResponsiveContainer)({
  overflow: 'hidden',
  position: 'absolute',
});
