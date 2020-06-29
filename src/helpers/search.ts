/**
 * @prettier
 */

import { get, toString } from 'lodash';

function search(docs: any[], properties: string[], value: string): any[] {
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
