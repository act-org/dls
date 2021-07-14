/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import JSONParseSafe from 'json-parse-safe';
import useLocalStorage from 'react-use-localstorage';

const LOCAL_STORAGE_KEY_REQUEST = 'LOCAL_STORAGE_KEY_REQUEST';

export interface ShareSessionStorageKeyProps {
  keyName: string;
  onSetKeyValue?: (keyValue: any) => void;
}

export const ShareSessionStorageKey: React.FC<ShareSessionStorageKeyProps> = ({
  keyName,
  onSetKeyValue,
}: ShareSessionStorageKeyProps): null => {
  const sessionStorageKeyValue = sessionStorage.getItem(keyName) || '';

  const [localStorageKeyValue, setLocalStorageSession] =
    useLocalStorage(keyName);
  const [localStorageKeyRequest, setLocalStorageKeyRequest] = useLocalStorage(
    LOCAL_STORAGE_KEY_REQUEST,
  );

  const sessionStorageKeyValueParsed =
    JSONParseSafe(sessionStorageKeyValue).value || sessionStorageKeyValue;
  const localStorageKeyValueParsed =
    JSONParseSafe(localStorageKeyValue).value || localStorageKeyValue;
  const localStorageKeyRequestParsed =
    JSONParseSafe(localStorageKeyRequest).value || localStorageKeyRequest;

  // If we don't have the session key, request it from other tab(s) that
  // may have it in their Session Storage.
  React.useEffect((): void => {
    const fn = async (): Promise<void> => {
      if (!sessionStorageKeyValueParsed) {
        setLocalStorageKeyRequest('true');
      }
    };

    fn();
  }, []);

  // If another tab requests the session key and we have it, provide it
  // to Local Storage and terminate the request.
  React.useEffect((): void => {
    const fn = async (): Promise<void> => {
      if (localStorageKeyRequestParsed && sessionStorageKeyValueParsed) {
        setLocalStorageSession(sessionStorageKeyValueParsed);
      }

      localStorage.removeItem(LOCAL_STORAGE_KEY_REQUEST);
    };

    fn();
  }, [localStorageKeyRequestParsed, sessionStorageKeyValueParsed]);

  // If we see the session key posted to Local Storage, let's set it in our
  // own Session Storage and remove it from Local Storage.
  React.useEffect((): void => {
    const fn = async (): Promise<void> => {
      if (localStorageKeyValueParsed && !sessionStorageKeyValueParsed) {
        sessionStorage.setItem(keyName, localStorageKeyValueParsed);
        if (onSetKeyValue) {
          onSetKeyValue(localStorageKeyValueParsed);
        }
      }

      localStorage.removeItem(keyName);
    };

    fn();
  }, [localStorageKeyValueParsed, sessionStorageKeyValueParsed]);

  return null;
};

export default ShareSessionStorageKey;
