/**
 * @prettier
 */
import * as React from 'react';
import { TableCellProps } from '@material-ui/core';
import { SortObject } from '~/types';
export interface Props extends TableCellProps {
    children: string | React.ReactElement<any>;
    currentSortObject: SortObject;
    onChangeSort: (sortObject: SortObject) => void;
    sortBy?: string;
    style?: React.CSSProperties;
}
declare const TableCellHead: React.FC<Props>;
export default TableCellHead;
//# sourceMappingURL=index.d.ts.map