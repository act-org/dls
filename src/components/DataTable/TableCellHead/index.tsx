/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Grid, TableCell, TableCellProps, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ChevronDown from '~/icons/ChevronDown';
import ChevronUp from '~/icons/ChevronUp';
import mergeClasses from '~/helpers/mergeClasses';
import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortDirection, SortObject } from '~/types';

import useStyles from './styles';

export interface TableCellHeadProps extends TableCellProps {
  children: string | React.ReactElement<unknown>;
  color?: 'default' | 'primary' | 'secondary';
  currentSortObject: SortObject;
  onChangeSort: (sortObject: SortObject) => void;
  sortBy?: string;
  style?: React.CSSProperties;
}

export const TableCellHead: React.FC<TableCellHeadProps> = ({
  classes: classesProp,
  children,
  color,
  currentSortObject,
  onChangeSort,
  sortBy,
  style,
  ...props
}: TableCellHeadProps): React.ReactElement<unknown> => {
  const { palette } = useTheme();

  const sortIsApplied: boolean = sortBy === currentSortObject.sortBy;

  const getStyleForIcon = (direction: SortDirection): React.CSSProperties => {
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

  const classes = useStyles({ color, sortBy, sortIsApplied });

  return (
    <TableCell
      classes={mergeClasses(
        {
          root: classes.tableCellRoot,
        },
        classesProp,
      )}
      component="td"
      onClick={sortBy ? toggleSort : undefined}
      style={style}
      {...props}
    >
      <Typography
        classes={{
          root: classes.typographyRoot,
        }}
        variant="body1"
      >
        {children}
      </Typography>

      {sortBy && (
        <Grid
          classes={{
            root: classes.sortContainerRoot,
          }}
          container
        >
          <ChevronUp
            classes={{
              root: classes.sortIconRoot,
            }}
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

          <ChevronDown
            classes={{
              root: classes.sortIconRoot,
            }}
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
        </Grid>
      )}
    </TableCell>
  );
};

TableCellHead.defaultProps = {
  color: 'default',
  sortBy: undefined,
  style: undefined,
};

export default TableCellHead;
