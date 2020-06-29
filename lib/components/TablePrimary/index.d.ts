/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
interface Cell<T> {
    dataKey: keyof T;
    label: string;
    searchable: boolean;
    sortable: boolean;
    style?: React.CSSProperties;
}
export interface Props<T> {
    cells: Cell<T>[];
    items: T[];
    searchQuery?: string;
    setSortObject: (sortObject: SortObject<T>) => void;
    sortObject: SortObject<T>;
}
declare const TablePrimary: <T>({ cells, items: originalItems, searchQuery, setSortObject, sortObject, }: Props<T>) => React.ReactElement<any>;
export default TablePrimary;
//# sourceMappingURL=index.d.ts.map