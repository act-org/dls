/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import JSONParseSafe from 'json-parse-safe';
import { get } from 'lodash';
import { FC, useEffect } from 'react';

import useLocalStorage from '~/hooks/useLocalStorage';

export interface SessionStorageKeySharerProps {
  keyName: string;
  onSetKeyValue?: (keyValue: any) => void;
}

export const SessionStorageKeySharer: FC<SessionStorageKeySharerProps> = ({
  keyName,
  onSetKeyValue,
}: SessionStorageKeySharerProps): null => {
  const LOCAL_STORAGE_KEY_REQUEST = `REQUEST-${keyName}`;

  const sessionStorageKeyValue = sessionStorage.getItem(keyName) || '';

  const [localStorageKeyValue, setLocalStorageSession] =
    useLocalStorage(keyName);
  const [localStorageKeyRequest, setLocalStorageKeyRequest] = useLocalStorage(
    LOCAL_STORAGE_KEY_REQUEST,
  );

  const sessionStorageKeyValueParsed =
    get(JSONParseSafe(sessionStorageKeyValue), 'value') ||
    sessionStorageKeyValue;
  const localStorageKeyValueParsed =
    get(JSONParseSafe(localStorageKeyValue), 'value') || localStorageKeyValue;
  const localStorageKeyRequestParsed =
    get(JSONParseSafe(localStorageKeyRequest), 'value') ||
    localStorageKeyRequest;

  // If we don't have the session key, request it from other tab(s) that
  // may have it in their Session Storage.
  useEffect((): void => {
    if (!sessionStorageKeyValueParsed) {
      setLocalStorageKeyRequest('true');
    }
  }, []);

  // If another tab requests the session key and we have it, provide it
  // to Local Storage and terminate the request.
  useEffect((): void => {
    if (localStorageKeyRequestParsed && sessionStorageKeyValueParsed) {
      setLocalStorageSession(sessionStorageKeyValueParsed);
    }

    localStorage.removeItem(LOCAL_STORAGE_KEY_REQUEST);
  }, [localStorageKeyRequestParsed, sessionStorageKeyValueParsed]);

  // If we see the session key posted to Local Storage, let's set it in our
  // own Session Storage and remove it from Local Storage.
  useEffect((): void => {
    if (localStorageKeyValueParsed && !sessionStorageKeyValueParsed) {
      sessionStorage.setItem(keyName, localStorageKeyValueParsed);
      if (onSetKeyValue) {
        onSetKeyValue(localStorageKeyValueParsed);
      }
    }

    localStorage.removeItem(keyName);
  }, [localStorageKeyValueParsed, sessionStorageKeyValueParsed]);

  return null;
};

SessionStorageKeySharer.defaultProps = {
  onSetKeyValue: undefined,
};

export default SessionStorageKeySharer;
