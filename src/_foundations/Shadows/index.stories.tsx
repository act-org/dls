/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid2, ListItem, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { StyledGrid } from './styles';

const Story = (): React.ReactElement => {
  const { shadows } = useTheme();

  return (
    <Grid2 container>
      {shadows.map((shadow, i) => (
        <StyledGrid
          key={shadow}
          size={{
            xs: 12,
          }}
        >
          <Paper
            style={{
              boxShadow: shadow,
            }}
          >
            <ListItem>
              <ListItemText primary={`shadows[${i}]`} secondary={shadow} />
            </ListItem>
          </Paper>
        </StyledGrid>
      ))}
    </Grid2>
  );
};

export default {
  args: {},
  component: Story,
  parameters: {
    layout: 'padded',
  },
  title: 'Foundations / Shadows',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
