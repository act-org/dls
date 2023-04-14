/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { ListItem, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import flatten from 'flat';
import { includes, isFunction, isString } from 'lodash';
import React from 'react';

import {
  StyledAvatar,
  StyledDivider,
  StyledGrid,
  StyledGridContainer,
  StyledListItemIcon,
} from './styles';

const Story = (): React.ReactElement => {
  const { palette } = useTheme();

  const paletteGroups = Object.keys(palette)
    .filter(
      (group): boolean =>
        !includes(
          ['augmentColor', 'contrastThreshold', 'getContrastText', 'mode'],
          group,
        ),
    )
    .sort();

  const paletteFlat: Record<string, unknown> = Object.fromEntries(
    Object.entries(flatten(palette)).sort(),
  );

  return (
    <>
      {paletteGroups.map(group => {
        return (
          <>
            <Typography variant="h1">{group}</Typography>

            <StyledDivider />

            <StyledGridContainer container>
              {Object.keys(paletteFlat).map(key => {
                if (!key.startsWith(group)) {
                  return null;
                }

                const value = paletteFlat[key];

                if (isFunction(value)) {
                  return null;
                }

                return (
                  <StyledGrid item key={key} md={3} sm={6} xs={12}>
                    <ListItem>
                      <StyledListItemIcon>
                        <StyledAvatar
                          sx={{
                            bgcolor: isString(value) ? value : undefined,
                            borderStyle: isString(value) ? 'solid' : 'dashed',
                          }}
                          variant="rounded"
                        >
                          &nbsp;
                        </StyledAvatar>
                      </StyledListItemIcon>

                      <ListItemText primary={key} secondary={String(value)} />
                    </ListItem>
                  </StyledGrid>
                );
              })}
            </StyledGridContainer>
          </>
        );
      })}
    </>
  );
};

export default {
  args: {},
  component: Story,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Foundations / Palette',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
