/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Grid2, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { StyledComment, StyledGridItem, StyledPaper } from './styles';

const Story = (): React.ReactElement => {
  const { spacing } = useTheme();
  const [sp, setSp] = React.useState(1);

  const padding = spacing(sp);

  return (
    <>
      <Grid2 container>
        <Grid2>
          <TextField
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            label="Spacing"
            onChange={(e): void => {
              setSp(Number(e.target.value || 0));
            }}
            type="number"
            value={sp}
            variant="outlined"
          />
        </Grid2>

        <StyledGridItem>
          <Typography>
            <code>
              padding: spacing({sp})&nbsp;
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <StyledComment>// {padding}</StyledComment>
            </code>
          </Typography>
        </StyledGridItem>
      </Grid2>

      <StyledPaper
        sx={{
          p: padding,
        }}
        variant="outlined"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </StyledPaper>
    </>
  );
};

export default {
  args: {},
  component: Story,
  parameters: {
    layout: 'padded',
  },
  title: 'Foundations / Spacing',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
