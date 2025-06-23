/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TypographyVariant } from '@mui/material/styles/createTypography';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import compact from 'lodash/compact';
import isPlainObject from 'lodash/isPlainObject';
import React from 'react';
import InformationOutline from '~/icons/InformationOutline';

import {
  StyledCode,
  StyledDivider,
  StyledGridContainerInfo,
  StyledGridItem,
  StyledGridItemTypography,
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
        return key as TypographyVariant;
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
            <Grid container>
              <StyledGridItem
                size={{
                  xs: 2,
                }}
              >
                <StyledGridContainerInfo container>
                  <Grid>
                    <Typography variant="body1">{variant}</Typography>
                  </Grid>

                  <Grid>
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
                  </Grid>
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
            </Grid>
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
