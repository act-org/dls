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

const LOCAL_STORAGE_REQUESTING_SESSION = 'localStorageRequestingSession';
const LOCAL_STORAGE_SESSION = 'session';

export const withSession: React.FC<any> = (
  WrappedComponent: React.ComponentType<any>,
): any =>
  function WithSession(props: any): React.ReactElement<any> | null {
    const [session, setSession] = useSessionStorage('session', null);
    const sessionParsed = JSON.parse(session || null);

    React.useEffect((): void => {
      window.addEventListener('storage', function (e) {
        if (e.storageArea === sessionStorage) {
          if (e.key === 'session') {
            setSession(e.newValue);
          }
        }
      });
    }, []);

    const [localStorageSession, setLocalStorageSession] = useLocalStorage(
      LOCAL_STORAGE_SESSION,
      null,
    );
    const localStorageSessionParsed = JSON.parse(localStorageSession || null);

    const [localStorageRequestingSession, setLocalStorageRequestingSession] =
      useLocalStorage(LOCAL_STORAGE_REQUESTING_SESSION, false);
    const localStorageRequestingSessionParsed = JSON.parse(
      localStorageRequestingSession || null,
    );

    const [sessionWasRequested, setSessionWasRequested] = React.useState(false);

    // If we don't have the session key, request it from other session(s) that
    // may have it in their Session Storage.
    React.useEffect((): void => {
      const fn = async (): Promise<void> => {
        if (!sessionParsed) {
          console.log('requesting session...');
          setLocalStorageRequestingSession(true);
          setSessionWasRequested(true);
        }
      };

      fn();
    }, [sessionParsed]);

    // If another session requests the session key and we have it, provide it
    // to Local Storage and terminate the request.
    React.useEffect((): void => {
      const fn = async (): Promise<void> => {
        if (localStorageRequestingSessionParsed && sessionParsed) {
          console.log('sending session...');
          localStorage.removeItem(LOCAL_STORAGE_REQUESTING_SESSION);
          setLocalStorageSession(sessionParsed);
        }
      };

      fn();
    }, [localStorageRequestingSessionParsed, sessionParsed]);

    // If we received the session key via Local Storage, let's set it in our
    // own Session Storage and remove it from Local Storage.
    React.useEffect((): void => {
      const fn = async (): Promise<void> => {
        if (localStorageSessionParsed && !sessionParsed) {
          console.log('setting session...');
          localStorage.removeItem(LOCAL_STORAGE_SESSION);
          setSession(localStorageSessionParsed);
        }
      };

      fn();
    }, [localStorageSessionParsed, sessionParsed]);

    if (sessionParsed || sessionWasRequested) {
      return <WrappedComponent {...props} session={sessionParsed} />;
    }

    return <></>;
  };

export default withSession;
