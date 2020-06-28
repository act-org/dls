/**
 * @prettier
 */

import { get, toString } from 'lodash';

function search<T>(
  docs: T[],
  properties: (keyof T | string)[],
  value: string,
): T[] {
  return docs.filter(doc => {
    return properties.some((property): boolean => {
      const currentValue = get(doc, property);
      if (doc !== null && currentValue !== null) {
        return toString(currentValue)
          .toLowerCase()
          .includes(value.trim().toLowerCase());
      }
      return false;
    });
  });
}

export default search;
