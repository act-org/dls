/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import InformationOutline from '@actinc/dls/icons/InformationOutline';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Variant } from '@mui/material/styles/createTypography';
import { Meta, StoryObj } from '@storybook/react';
import { compact, isPlainObject, isString, sortBy } from 'lodash';
import React from 'react';

import pxToNumber from '@actinc/dls/helpers/pxToNumber';
import { Px } from '@actinc/dls/types';

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
      if (isPlainObject((typography as any)[key])) {
        return key as Variant;
      }

      return null;
    }),
  ).filter((v: string): boolean => v !== 'allVariants');

  const sortedVariants = sortBy(variants, v => {
    const fontSize = typography[v].fontSize;

    return fontSize && isString(fontSize)
      ? pxToNumber(fontSize as Px)
      : fontSize;
  }).reverse();

  return (
    <>
      {sortedVariants.map(variant => {
        return (
          <React.Fragment key={variant}>
            <Grid container>
              <StyledGridItem item xs={2}>
                <StyledGridContainerInfo container>
                  <Grid item>
                    <Typography variant="body1">{variant}</Typography>
                  </Grid>

                  <Grid item>
                    <Tooltip
                      arrow
                      title={
                        <>
                          {Object.keys(properties).map(
                            (key): React.ReactElement => {
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

              <StyledGridItemTypography item xs={10}>
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
  tags: ['autodocs'],
  title: 'Foundations / Typography',
} as Meta;

type Story = StoryObj;

export const Preview: Story = { args: {} };
