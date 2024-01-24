/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { TableCellProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CSSProperties, FC, ReactElement } from 'react';

import SORT_DIRECTION_TYPES from '~/constants/SORT_DIRECTION_TYPES';
import { SortDirection, SortObject } from '~/types';

import {
  StyledChevronDown,
  StyledChevronUp,
  StyledGrid,
  StyledTableCell,
  StyledTypography,
} from './styles';

export interface TableCellHeadProps extends TableCellProps {
  children: string | ReactElement<unknown>;
  color?: 'default' | 'primary' | 'secondary';
  currentSortObject: SortObject;
  onChangeSort: (sortObject: SortObject) => void;
  sortBy?: string;
  style?: CSSProperties;
}

export const TableCellHead: FC<TableCellHeadProps> = ({
  classes: classesProp,
  children,
  color,
  currentSortObject,
  onChangeSort,
  sortBy,
  style,
  ...props
}: TableCellHeadProps): ReactElement<unknown> => {
  const { palette } = useTheme();

  const sortIsApplied: boolean = sortBy === currentSortObject.sortBy;

  const getStyleForIcon = (direction: SortDirection): CSSProperties => {
    if (!sortIsApplied || currentSortObject.sortDirection !== direction) {
      return {};
    }

    return {
      color: color === 'default' ? palette.text.primary : palette.common.white,
    };
  };

  const toggleSort = (): void => {
    if (sortBy) {
      let newSortDirection = SORT_DIRECTION_TYPES.ASCENDING;

      if (sortIsApplied) {
        newSortDirection =
          currentSortObject.sortDirection === SORT_DIRECTION_TYPES.ASCENDING
            ? SORT_DIRECTION_TYPES.DESCENDING
            : SORT_DIRECTION_TYPES.ASCENDING;
      }

      onChangeSort({
        sortBy,
        sortDirection: newSortDirection,
      });
    }
  };

  return (
    <StyledTableCell
      $sortBy={sortBy}
      $sortIsApplied={sortIsApplied}
      classes={classesProp}
      color={color}
      component="td"
      onClick={sortBy ? toggleSort : undefined}
      style={style}
      {...props}
    >
      <StyledTypography $colorProp={color} variant="body1">
        {children}
      </StyledTypography>

      {sortBy && (
        <StyledGrid container>
          <StyledChevronUp
            $colorProp={color}
            onClick={(): void => {
              onChangeSort({
                sortBy,
                sortDirection: SORT_DIRECTION_TYPES.ASCENDING,
              });
            }}
            role="button"
            style={getStyleForIcon(SORT_DIRECTION_TYPES.ASCENDING)}
            viewBox="9 3 5 15"
          />

          <StyledChevronDown
            $colorProp={color}
            onClick={(): void => {
              onChangeSort({
                sortBy,
                sortDirection: SORT_DIRECTION_TYPES.DESCENDING,
              });
            }}
            role="button"
            style={getStyleForIcon(SORT_DIRECTION_TYPES.DESCENDING)}
            viewBox="9 7 5 15"
          />
        </StyledGrid>
      )}
    </StyledTableCell>
  );
};

TableCellHead.defaultProps = {
  color: 'default',
  sortBy: undefined,
  style: undefined,
};

export default TableCellHead;
