/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid2, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import { flatten } from 'flat';
import includes from 'lodash/includes';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import React from 'react';

import {
  StyledAvatar,
  StyledDivider,
  StyledGridContainer,
  StyledListItem,
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

  const paletteFlat: Record<string, unknown> = flatten(palette);

  return (
    <>
      {paletteGroups.map(group => {
        return (
          <>
            <Typography variant="h1">{group}</Typography>

            <StyledDivider />

            <StyledGridContainer container spacing={2}>
              {Object.keys(paletteFlat)
                .sort()
                .map(key => {
                  if (!key.startsWith(group)) {
                    return null;
                  }

                  const value = paletteFlat[key];

                  if (isFunction(value)) {
                    return null;
                  }

                  return (
                    <Grid2
                      key={key}
                      size={{
                        md: 3,
                        sm: 6,
                        xs: 12,
                      }}
                    >
                      <StyledListItem>
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
                      </StyledListItem>
                    </Grid2>
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
  title: 'Foundations / Palette',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
