/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';

import { ChevronDown, ChevronUp } from '~/icons';
import COLORS from '~/constants/colors';
import GridContainer from '~/components/GridContainer';
import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';
import TableCellBase, {
  Props as TableCellBaseProps,
} from '~/components/TableCellBase';
import TypographyBase from '~/components/TypographyBase';

import useStyles from './styles';

export interface Props<T> extends TableCellBaseProps {
  children: any;
  dataKey: string;
  setSortObject: (value: SortObject<T>) => void;
  sortable?: boolean;
  sortObject: SortObject<T>;
  style?: React.CSSProperties;
}

const TableCellHead = <T,>({
  children,
  dataKey,
  setSortObject,
  sortable = false,
  sortObject,
  style,
  ...props
}: Props<T>): React.ReactElement<any> => {
  const key = dataKey as SortObject<T>['dataKey'];

  const sortIsApplied: boolean = sortable && sortObject.dataKey === dataKey;

  const getStyleForIcon = (
    direction: SortObject<T>['direction'],
  ): React.CSSProperties => {
    if (!sortIsApplied || sortObject.direction !== direction) {
      return {};
    }

    return { color: COLORS.WHITE };
  };

  const toggleSort = (): void => {
    let direction = SORT_DIRECTION_TYPES.ASC;

    if (sortIsApplied) {
      direction =
        sortObject.direction === SORT_DIRECTION_TYPES.ASC
          ? SORT_DIRECTION_TYPES.DESC
          : SORT_DIRECTION_TYPES.ASC;
    }

    setSortObject({ dataKey: key, direction });
  };

  const classes = useStyles();

  return (
    <TableCellBase
      classes={{
        root: clsx(
          classes.tableCellRoot,
          sortable && classes.tableCellRootSortable,
          sortIsApplied && classes.tableCellRootSortApplied,
        ),
      }}
      component="div"
      onClick={sortable ? toggleSort : undefined}
      style={style}
      {...props}
    >
      <TypographyBase
        classes={{
          root: classes.typographyRoot,
        }}
      >
        {children}
      </TypographyBase>

      {sortable && (
        <GridContainer
          classes={{
            root: classes.sortContainerRoot,
          }}
        >
          <ChevronUp
            classes={{
              root: classes.sortIconRoot,
            }}
            onClick={(): void => {
              setSortObject({
                dataKey: key,
                direction: SORT_DIRECTION_TYPES.ASC,
              });
            }}
            role="button"
            style={getStyleForIcon(SORT_DIRECTION_TYPES.ASC)}
            viewBox="9 3 5 15"
          />

          <ChevronDown
            classes={{
              root: classes.sortIconRoot,
            }}
            onClick={(): void => {
              setSortObject({
                dataKey: key,
                direction: SORT_DIRECTION_TYPES.DESC,
              });
            }}
            role="button"
            style={getStyleForIcon(SORT_DIRECTION_TYPES.DESC)}
            viewBox="9 7 5 15"
          />
        </GridContainer>
      )}
    </TableCellBase>
  );
};

export default TableCellHead;
