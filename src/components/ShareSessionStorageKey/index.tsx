/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import useLocalStorage from 'react-use-localstorage';
import { useSessionStorage } from 'react-use-storage';

const LOCAL_STORAGE_KEY_REQUEST = 'LOCAL_STORAGE_KEY_REQUEST';

export interface ShareSessionStorageKeyProps {
  keyName: string;
}

export const ShareSessionStorageKey: React.FC<ShareSessionStorageKeyProps> = ({
  keyName,
}: ShareSessionStorageKeyProps): null => {
  const [sessionStorageKeyValue, setSessionStorageKeyValue] = useSessionStorage(
    keyName,
    null,
  );
  const [localStorageKeyValue, setLocalStorageSession] = useLocalStorage(
    keyName,
    null,
  );
  const [localStorageKeyRequest, setLocalStorageKeyRequest] = useLocalStorage(
    LOCAL_STORAGE_KEY_REQUEST,
    false,
  );

  let sessionStorageKeyValueParsed = sessionStorageKeyValue || null;
  try {
    sessionStorageKeyValueParsed = JSON.parse(sessionStorageKeyValue);
  } catch (err) {}
  let localStorageKeyValueParsed = localStorageKeyValue || null;
  try {
    localStorageKeyValueParsed = JSON.parse(localStorageKeyValue);
  } catch (err) {}
  let localStorageKeyRequestParsed = localStorageKeyRequest || null;
  try {
    localStorageKeyRequestParsed = JSON.parse(localStorageKeyRequest);
  } catch (err) {}

  // If we don't have the key key, request it from other key(s) that
  // may have it in their Session Storage.
  React.useEffect((): void => {
    const fn = async (): Promise<void> => {
      if (!sessionStorageKeyValueParsed) {
        console.log('requesting key...');
        setLocalStorageKeyRequest(true);
      }
    };

    fn();
  }, [sessionStorageKeyValueParsed]);

  // If another key requests the key key and we have it, provide it
  // to Local Storage and terminate the request.
  React.useEffect((): void => {
    const fn = async (): Promise<void> => {
      if (localStorageKeyRequestParsed && sessionStorageKeyValueParsed) {
        console.log('sending key...');
        localStorage.removeItem(LOCAL_STORAGE_KEY_REQUEST);
        setLocalStorageSession(sessionStorageKeyValueParsed);
      }
    };

    fn();
  }, [localStorageKeyRequestParsed, sessionStorageKeyValueParsed]);

  // If we received the key key via Local Storage, let's set it in our
  // own Session Storage and remove it from Local Storage.
  React.useEffect((): void => {
    const fn = async (): Promise<void> => {
      if (localStorageKeyValueParsed && !sessionStorageKeyValueParsed) {
        console.log('setting key...');
        localStorage.removeItem(keyName);
        setSessionStorageKeyValue(localStorageKeyValueParsed);
      }
    };

    fn();
  }, [localStorageKeyValueParsed, sessionStorageKeyValueParsed]);

  return null;
};

export default ShareSessionStorageKey;
