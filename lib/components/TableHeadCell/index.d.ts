/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
interface Props<T> {
    children: any;
    dataKey: string;
    setSortObject: (value: SortObject<T>) => void;
    sortable?: boolean;
    sortObject: SortObject<T>;
    style?: React.CSSProperties;
}
declare const TableHeadCell: <T>({ children, dataKey, setSortObject, sortable, sortObject, style, }: Props<T>) => React.ReactElement<any>;
export default TableHeadCell;
//# sourceMappingURL=index.d.ts.map