/**
 * @prettier
 */
import * as React from 'react';
import { Props as EmptyStatePrimaryProps } from '~/components/EmptyStatePrimary';
import { SortObject } from '~/types';
interface Column<T> {
    renderValue: (item: T) => any;
    label?: string;
    sortBy?: string;
    style?: React.CSSProperties;
}
export interface Props<T> {
    columns: Column<T>[];
    currentSortObject: SortObject;
    emptyStateProps: EmptyStatePrimaryProps;
    items: T[];
    onChangeSort: (sortObject: SortObject) => void;
    RowWrapper?: (item: T, children: React.ReactElement<any>) => React.ReactElement<any>;
}
declare const DataTablePrimary: {
    <T>({ columns, currentSortObject, emptyStateProps, items, onChangeSort, RowWrapper, }: Props<T>): React.ReactElement<any>;
    defaultProps: {
        RowWrapper: undefined;
    };
};
export default DataTablePrimary;
//# sourceMappingURL=index.d.ts.map