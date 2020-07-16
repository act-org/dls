/**
 * @prettier
 */
import { SortObject } from '~/types';
declare type SortFunction<T> = (itemA: T, itemB: T) => number;
declare function sort<T>({ sortBy, sortDirection }: SortObject): SortFunction<T>;
export default sort;
//# sourceMappingURL=sort.d.ts.map