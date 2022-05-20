/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Grid, GridProps } from '@mui/material';

import useStyles from './styles';

interface IGridContent {
  children: React.ReactElement<unknown>;
  key: string;
}

type GridContentGroup = IGridContent[];

export interface GridGeneratorProps {
  groups: GridContentGroup[];
  gridContainerProps?: GridProps;
  gridItemProps?: GridProps;
}

export const GridGenerator: React.FC<GridGeneratorProps> = ({
  groups,
  gridContainerProps,
  gridItemProps,
}: GridGeneratorProps) => {
  const classes = useStyles();

  return (
    <>
      {/* eslint-disable react/no-array-index-key */}
      {groups.map(
        (group, i): React.ReactElement<unknown> => (
          <Grid
            classes={{
              container: classes.gridContainerRoot,
            }}
            container
            key={i}
            spacing={4}
            {...gridContainerProps}
          >
            {group.map(
              (gridItem): React.ReactElement<unknown> => (
                <Grid
                  classes={{
                    item: classes.gridItemRoot,
                  }}
                  item
                  key={gridItem.key}
                  xs
                  {...gridItemProps}
                >
                  {gridItem.children}
                </Grid>
              ),
            )}
          </Grid>
        ),
      )}
      {/* eslint-enable react/no-array-index-key */}
    </>
  );
};

export default GridGenerator;
