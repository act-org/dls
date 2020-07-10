/**
 * @prettier
 */
import { SortObject } from '~/types';
declare type SortFunction = (itemA: any, itemB: any) => number;
declare function sort({ dataKey, direction }: SortObject): SortFunction;
export default sort;
//# sourceMappingURL=sort.d.ts.map