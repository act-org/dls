/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  deleteFromStorage,
  useLocalStorage,
  writeStorage,
} from '@rehooks/local-storage';
import { useSessionStorage } from 'react-use-storage';

export const withSession: React.FC<any> = (
  WrappedComponent: React.ComponentType<any>,
): any =>
  function WithSession(props: any): React.ReactElement {
    const [session, setSession] = useSessionStorage('session', '');
    const [localStorageSession] = useLocalStorage('session');
    const [isRequestingSession] = useLocalStorage('REQUESTING_SESSION');

    // If we don't have the session key, request it from other session(s) that
    // may have it in their Session Storage.
    React.useEffect((): void => {
      if (!session) {
        console.log('requesting session...');
        writeStorage('REQUESTING_SESSION', true);
      }
    }, [session]);

    // If another session requests the session key and we have it, provide it
    // to Local Storage and terminate the request.
    React.useEffect((): void => {
      if (isRequestingSession && session) {
        console.log('sending session...');
        writeStorage('session', session);
        console.log('session', session);
        deleteFromStorage('REQUESTING_SESSION');
      }
    }, [isRequestingSession, session]);

    // If we received the session key via Local Storage, let's set it in our
    // own Session Storage and remove it from Local Storage.
    React.useEffect((): void => {
      if (localStorageSession && !session) {
        console.log('setting session...');
        console.log('localStorageSession', localStorageSession);
        setSession(localStorageSession);
        deleteFromStorage('session');
      }
    }, [localStorageSession, session]);

    return <WrappedComponent {...props} session={session} />;
  };

export default withSession;
