/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
import { Props as TableCellBaseProps } from '~/components/TableCellBase';
export interface Props extends TableCellBaseProps {
    children: string | React.ReactElement<any>;
    dataKey: string;
    setSortObject: (sortObject: SortObject) => void;
    sortable?: boolean;
    sortObject: SortObject;
    style?: React.CSSProperties;
}
declare const TableCellHead: React.FC<Props>;
export default TableCellHead;
//# sourceMappingURL=index.d.ts.map