/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import InformationOutline from '@actinc/dls/icons/InformationOutline';
import { Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import { compact, isPlainObject, isString, sortBy } from 'lodash';
import React from 'react';

import pxToNumber from '@actinc/dls/helpers/pxToNumber';

const properties = {
  color: 'color',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  letterSpacing: 'letter-spacing',
  lineHeight: 'line-height',
};

const Story = (): React.ReactElement => {
  const { palette, typography } = useTheme();

  const variants = compact(
    Object.keys(typography).map(key => {
      if (isPlainObject(typography[key])) {
        return key;
      }

      return null;
    }),
  ).filter((v: string): boolean => v !== 'allVariants');

  const sortedVariants = sortBy(variants, v =>
    isString(typography[v].fontSize)
      ? pxToNumber(typography[v].fontSize)
      : typography[v].fontSize,
  ).reverse();

  return (
    <>
      {sortedVariants.map(variant => {
        return (
          <React.Fragment key={variant}>
            <Grid container>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  border: `1px solid ${palette.divider}`,
                  display: 'flex',
                  justifyContent: 'center',
                  p: 2,
                }}
                xs={2}
              >
                <Grid
                  container
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Grid item>
                    <Typography variant="body1">{variant}</Typography>
                  </Grid>

                  <Grid item>
                    <Tooltip
                      arrow
                      placement="right"
                      title={
                        <>
                          {Object.keys(properties).map(
                            (key): React.ReactElement => {
                              const cssStyle = properties[key];
                              const value = typography[variant][key];

                              return (
                                <>
                                  <span
                                    key={cssStyle}
                                    style={{ display: 'block' }}
                                  >
                                    <code>
                                      {cssStyle}: {value}
                                    </code>
                                  </span>

                                  <Divider sx={{ mt: 1, mb: 1 }} />
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
                </Grid>
              </Grid>

              <Grid
                item
                sx={{
                  alignItems: 'center',
                  border: `1px solid ${palette.divider}`,
                  display: 'flex',
                  p: 2,
                }}
                xs={10}
              >
                <Typography variant={variant}>
                  The quick brown fox jumps over the lazy dog.
                </Typography>
              </Grid>
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
