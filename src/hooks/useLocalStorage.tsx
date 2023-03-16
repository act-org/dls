/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { isFunction } from 'lodash';
import { useEffect, useState } from 'react';

export const useLocalStorage = (
  key: string,
  initValue = '',
): [string, (v: string) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item || initValue;
    } catch (err) {
      console.error(err);
      return initValue;
    }
  });

  const handleStorage = (e: StorageEvent): void => {
    if (e.key === key && e.newValue !== storedValue) {
      setStoredValue(e.newValue || initValue);
    }
  };

  useEffect(() => {
    try {
      window.addEventListener('storage', handleStorage);
    } catch (err) {
      console.error(err);
    }

    return (): void => {
      try {
        window.removeEventListener('storage', handleStorage);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  const updateStoredValue = (value: string | ((v: string) => string)): void => {
    try {
      const valueToStore = isFunction(value) ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, updateStoredValue];
};

export default useLocalStorage;
