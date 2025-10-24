/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactNode } from 'react';

interface StoryVariationProps {
  children: ReactNode;
  label: string;
  sx?: SxProps<Theme>;
}

/**
 * Utility component for story variations that renders children inside a Grid
 * with proper spacing and a label using Typography. Includes max height and
 * scrolling to handle components that may overflow their bounds.
 */
export const StoryVariation = ({ children, label, sx }: StoryVariationProps): ReactNode => (
  <Grid sx={{ border: theme => `1px dashed ${theme.palette.divider}`, borderRadius: 1, mt: 2, p: 1 }}>
    <Typography display="block" fontWeight="bold" sx={{ mb: 1 }} variant="overline">
      {label}
    </Typography>
    <Grid sx={{ maxHeight: 500, overflowY: 'auto', ...sx }}>{children}</Grid>
  </Grid>
);

export default StoryVariation;
