/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
interface Cell {
    dataKey: string;
    displayValueFn?: (item: any) => void;
    label: string;
    searchable: boolean;
    sortable: boolean;
    style?: React.CSSProperties;
}
export interface Props {
    cells: Cell[];
    items: any[];
    searchQuery?: string;
    setSortObject: (sortObject: SortObject) => void;
    sortObject: SortObject;
}
declare const TablePrimary: React.FC<Props>;
export default TablePrimary;
//# sourceMappingURL=index.d.ts.map