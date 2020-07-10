/**
 * @prettier
 */
import * as React from 'react';
import { SortObject } from '~/types';
interface Column {
    dataKey: string;
    displayValueFn?: (item: any) => void;
    label: string;
    searchable: boolean;
    sortable: boolean;
    style?: React.CSSProperties;
}
export interface Props {
    columns: Column[];
    items: any[];
    searchQuery?: string;
    setSortObject: (sortObject: SortObject) => void;
    sortObject: SortObject;
}
declare const DataTablePrimary: React.FC<Props>;
export default DataTablePrimary;
//# sourceMappingURL=index.d.ts.map