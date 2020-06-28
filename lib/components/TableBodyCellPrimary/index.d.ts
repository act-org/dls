/**
 * @prettier
 */
import * as React from 'react';
import { TableCellProps } from '@material-ui/core';
import { SortObject } from '~/types';
export interface Props<T> extends TableCellProps {
    dataKey?: string;
    sortObject?: SortObject<T>;
}
declare const TableBodyCellPrimary: <T>({ dataKey, sortObject, ...otherProps }: Props<T>) => React.ReactElement<any>;
export default TableBodyCellPrimary;
//# sourceMappingURL=index.d.ts.map