/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
export interface Props<T> {
    children: any;
    dataKey: string;
    setSortObject: (value: SortObject<T>) => void;
    sortable?: boolean;
    sortObject: SortObject<T>;
    style?: React.CSSProperties;
}
declare const TableCellHead: <T>({ children, dataKey, setSortObject, sortable, sortObject, style, }: Props<T>) => React.ReactElement<any>;
export default TableCellHead;
//# sourceMappingURL=index.d.ts.map