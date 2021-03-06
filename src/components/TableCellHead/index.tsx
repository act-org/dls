/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Grid, TableCell, TableCellProps, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { ChevronDown, ChevronUp } from '~/icons';
import mergeClasses from '~/helpers/mergeClasses';
import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortDirection, SortObject } from '~/types';

import useStyles from './styles';

export interface TableCellHeadProps extends TableCellProps {
  children: string | React.ReactElement<any>;
  currentSortObject: SortObject;
  onChangeSort: (sortObject: SortObject) => void;
  sortBy?: string;
  style?: React.CSSProperties;
}

export const TableCellHead: React.FC<TableCellHeadProps> = ({
  classes: classesProp,
  children,
  currentSortObject,
  onChangeSort,
  sortBy,
  style,
  ...props
}: TableCellHeadProps): React.ReactElement<any> => {
  const { palette } = useTheme();

  const sortIsApplied: boolean = sortBy === currentSortObject.sortBy;

  const getStyleForIcon = (direction: SortDirection): React.CSSProperties => {
    if (!sortIsApplied || currentSortObject.sortDirection !== direction) {
      return {};
    }

    return { color: palette.common.white };
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

  const classes = useStyles();

  return (
    <TableCell
      classes={mergeClasses(
        {
          root: clsx(
            classes.tableCellRoot,
            sortBy && classes.tableCellRootSortable,
            sortIsApplied && classes.tableCellRootSortApplied,
          ),
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
  sortBy: undefined,
  style: undefined,
};

export default TableCellHead;
