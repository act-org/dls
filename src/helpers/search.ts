/**
 * @prettier
 */

import { get, toString } from 'lodash';

function search<T>(docs: T[], properties: string[], value: string): T[] {
  return docs.filter(doc =>
    properties.some((property): boolean => {
      const currentValue = get(doc, property);
      if (doc !== null && currentValue !== null) {
        return toString(currentValue)
          .toLowerCase()
          .includes(value.trim().toLowerCase());
      }
      return false;
    }),
  );
}

export default search;
