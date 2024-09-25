/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext } from 'react';

import { ConfirmDialogProps } from '~/components/ConfirmDialog';

type ConfirmContextType = (options?: ConfirmDialogProps) => Promise<boolean>;
/**
 * This is an internal type form the ConfirmProvider.  You should use
 * the ConfirmProvider rather than referencing this directly.
 */
export const ConfirmContext = createContext<ConfirmContextType>(() =>
  Promise.resolve(true),
);
export default ConfirmContext;
