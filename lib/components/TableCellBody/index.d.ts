/**
 * @prettier
 */
import * as React from 'react';
import { Props as TableCellBaseProps } from '~/components/TableCellBase';
import { SortObject } from '~/types';
export interface Props<T> extends TableCellBaseProps {
    dataKey?: string;
    sortObject?: SortObject<T>;
}
declare const TableCellBody: <T>({ dataKey, sortObject, ...otherProps }: Props<T>) => React.ReactElement<any>;
export default TableCellBody;
//# sourceMappingURL=index.d.ts.map