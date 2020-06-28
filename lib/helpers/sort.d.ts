/**
 * @prettier
 */
import { SortObject } from '~/types';
declare type SortFunction<T> = (itemA: T, itemB: T) => number;
declare function sort<T>({ dataKey, direction }: SortObject<T>): SortFunction<T>;
export default sort;
//# sourceMappingURL=sort.d.ts.map