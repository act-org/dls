/**
 * @prettier
 */
import * as React from 'react';
import { TableCellProps } from '@material-ui/core';
import { SortObject } from '~/types';
interface Props<T> extends TableCellProps {
    dataKey?: string;
    sortObject?: SortObject<T>;
}
declare const TableBodyCell: <T>({ dataKey, sortObject, ...otherProps }: Props<T>) => React.ReactElement<any>;
export default TableBodyCell;
//# sourceMappingURL=index.d.ts.map