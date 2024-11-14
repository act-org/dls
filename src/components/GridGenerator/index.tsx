/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Grid2Props } from '@mui/material/Grid2';
import { FC, ReactElement } from 'react';

import { StyledGridContainer, StyledGridItem } from './styles';

interface IGridContent {
  children: ReactElement<unknown>;
  key: string;
}

type GridContentGroup = IGridContent[];

export interface GridGeneratorProps {
  groups: GridContentGroup[];
  gridContainerProps?: Grid2Props;
  gridItemProps?: Grid2Props;
}

export const GridGenerator: FC<GridGeneratorProps> = ({
  groups,
  gridContainerProps,
  gridItemProps,
}: GridGeneratorProps) => (
  <>
    {/* eslint-disable react/no-array-index-key */}
    {groups.map(
      (group, i): ReactElement<unknown> => (
        <StyledGridContainer
          container
          key={i}
          spacing={4}
          {...gridContainerProps}
        >
          {group.map(
            (gridItem): ReactElement<unknown> => (
              <StyledGridItem key={gridItem.key} {...gridItemProps}>
                {gridItem.children}
              </StyledGridItem>
            ),
          )}
        </StyledGridContainer>
      ),
    )}
    {/* eslint-enable react/no-array-index-key */}
  </>
);

export default GridGenerator;
