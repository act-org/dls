/**
 * @prettier
 */
import * as React from 'react';
import { Props as TableCellBaseProps } from '~/components/TableCellBase';
import { SortObject } from '~/types';
export interface Props extends TableCellBaseProps {
    dataKey?: string;
    sortObject?: SortObject;
}
declare const TableCellBody: React.FC<Props>;
export default TableCellBody;
//# sourceMappingURL=index.d.ts.map