/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import noop from 'lodash/noop';
import { OptionsObject } from 'notistack';
import { createContext, ReactNode } from 'react';

import { ServerError } from '~/types';

export const AlertContext = createContext({
  actions: {
    /* eslint-disable @typescript-eslint/no-unused-vars, lodash/no-extra-args */
    addAlert: (alert: { message: ReactNode; options?: OptionsObject }): void =>
      noop(alert),
    addError: (error: Error | ServerError | unknown): void => noop(error),
    /* eslint-enable @typescript-eslint/no-unused-vars, lodash/no-extra-args */
  },
});

export default AlertContext;
