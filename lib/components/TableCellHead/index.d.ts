/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
import { Props as TableCellBaseProps } from '~/components/TableCellBase';
export interface Props<T> extends TableCellBaseProps {
    children: any;
    dataKey: string;
    setSortObject: (value: SortObject<T>) => void;
    sortable?: boolean;
    sortObject: SortObject<T>;
    style?: React.CSSProperties;
}
declare const TableCellHead: <T>({ children, dataKey, setSortObject, sortable, sortObject, style, ...props }: Props<T>) => React.ReactElement<any>;
export default TableCellHead;
//# sourceMappingURL=index.d.ts.map