/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import flatten from 'flat';
import { isFunction, isString } from 'lodash';
import React from 'react';

const AVATAR_SIZE = 50;

const Palette = (): React.ReactElement => {
  const { palette } = useTheme();

  const paletteFlat: Record<string, unknown> = Object.fromEntries(
    Object.entries(flatten(palette)).sort(),
  );

  return (
    <Grid container>
      {Object.keys(paletteFlat).map(key => {
        const value = paletteFlat[key];

        if (isFunction(value)) {
          return null;
        }

        return (
          <Grid
            item
            key={key}
            md={3}
            sm={6}
            sx={{ border: `1px solid ${palette.divider}` }}
            xs={12}
          >
            <ListItem>
              <ListItemIcon sx={{ width: AVATAR_SIZE * 1.25 }}>
                <Avatar
                  sx={{
                    bgcolor: isString(value) ? value : undefined,
                    border: `1px ${isString(value) ? 'solid' : 'dashed'} ${
                      palette.divider
                    }`,
                    height: AVATAR_SIZE,
                    width: AVATAR_SIZE,
                  }}
                  variant="rounded"
                >
                  &nbsp;
                </Avatar>
              </ListItemIcon>

              <ListItemText primary={key} secondary={String(value)} />
            </ListItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default {
  args: {},
  component: Palette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Foundations / Palette',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
