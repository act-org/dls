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

export const withSession: React.FC<any> = (
  WrappedComponent: React.ComponentType<any>,
): any =>
  function WithSession(props: any): React.ReactElement {
    const [session, setSession] = useSessionStorage('session', null);
    const [localStorageSession, setLocalStorageSession] = useLocalStorage(
      'session',
      null,
    );
    const [isRequestingSession, setIsRequestingSession] = useLocalStorage(
      'REQUESTING_SESSION',
      false,
    );

    const sessionParsed = JSON.parse(session || null);
    const localStorageSessionParsed = JSON.parse(localStorageSession || null);
    const isRequestingSessionParsed = JSON.parse(isRequestingSession || null);

    // If we don't have the session key, request it from other session(s) that
    // may have it in their Session Storage.
    React.useEffect((): void => {
      const fn = async (): Promise<void> => {
        if (!sessionParsed) {
          console.log('requesting session...');
          setIsRequestingSession(true);
        }
      };

      fn();
    }, [sessionParsed]);

    // If another session requests the session key and we have it, provide it
    // to Local Storage and terminate the request.
    React.useEffect((): void => {
      const fn = async (): Promise<void> => {
        if (isRequestingSessionParsed && sessionParsed) {
          console.log('sending session...');
          setIsRequestingSession(false);
          setLocalStorageSession(sessionParsed);
        }
      };

      fn();
    }, [isRequestingSessionParsed, sessionParsed]);

    // If we received the session key via Local Storage, let's set it in our
    // own Session Storage and remove it from Local Storage.
    React.useEffect((): void => {
      const fn = async (): Promise<void> => {
        if (localStorageSessionParsed && !sessionParsed) {
          console.log('setting session...');
          setLocalStorageSession(null);
          setSession(localStorageSessionParsed);
        }
      };

      fn();
    }, [localStorageSessionParsed, sessionParsed]);

    return <WrappedComponent {...props} session={sessionParsed} />;
  };

export default withSession;
