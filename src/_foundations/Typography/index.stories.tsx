/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid2, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Variant } from '@mui/material/styles/createTypography';
import { Meta, StoryObj } from '@storybook/react';
import { compact, isPlainObject } from 'lodash';
import React from 'react';
import InformationOutline from '~/icons/InformationOutline';

import {
  StyledCode,
  StyledDivider,
  StyledGridItem,
  StyledGridItemTypography,
  StyledGridContainerInfo,
} from './styles';

const properties = {
  color: 'color',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  letterSpacing: 'letter-spacing',
  lineHeight: 'line-height',
};

const Story = (): React.ReactElement => {
  const { typography } = useTheme();

  const variants = compact(
    Object.keys(typography).map((key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (isPlainObject((typography as any)[key])) {
        return key as Variant;
      }

      return null;
    }),
  ).filter((v: string): boolean => v !== 'allVariants');

  const sortedVariants = variants;

  return (
    <>
      {sortedVariants.map(variant => {
        return (
          <React.Fragment key={variant}>
            <Grid2 container>
              <StyledGridItem
                size={{
                  xs: 2,
                }}
              >
                <StyledGridContainerInfo container>
                  <Grid2>
                    <Typography variant="body1">{variant}</Typography>
                  </Grid2>

                  <Grid2>
                    <Tooltip
                      arrow
                      title={
                        <>
                          {Object.keys(properties).map(
                            (key): React.ReactElement => {
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              const cssStyle = (properties as any)[key];
                              const value = typography[variant][key];

                              return (
                                <>
                                  <StyledCode key={cssStyle}>
                                    {cssStyle}: {value}
                                  </StyledCode>

                                  <StyledDivider />
                                </>
                              );
                            },
                          )}
                        </>
                      }
                    >
                      <IconButton>
                        <InformationOutline />
                      </IconButton>
                    </Tooltip>
                  </Grid2>
                </StyledGridContainerInfo>
              </StyledGridItem>

              <StyledGridItemTypography
                size={{
                  xs: 10,
                }}
              >
                <Typography variant={variant}>
                  The quick brown fox jumps over the lazy dog.
                </Typography>
              </StyledGridItemTypography>
            </Grid2>
          </React.Fragment>
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
  title: 'Foundations / Typography',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
