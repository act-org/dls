/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { ConfirmDialogProps } from '~/components/ConfirmDialog';
import { ConfirmContext } from '~/context/Confirm';

/**
 * Hook to facilitate an easy api for opening a confirmation dialog.  This requires
 * using the ConfirmProvider higher up in the React DOM tree.  Ideally, this would be something added
 * to the top level application after the Material Theme
 * @example
 * ```typescript
 * import { useConfirm } from '@opsportal';
 * import { Button } from '@mui/material';
 *
 * export function ConfirmExample() {
 *     const confirm = useConfirm();
 *
 *     const openConfirm = async () => {
 *         if (await confirm({description: 'Are you sure you want to do this?'})) {
 *             console.log('confirmed');
 *         } else {
 *             console.log('cancelled');
 *         }
 *     }
 *
 *     return (
 *         <Button onClick={openConfirm}>Open Confirm</Button>
 *     );
 * }
 * ```
 * @returns
 */
export const useConfirm: () => (
  options?: ConfirmDialogProps,
) => Promise<boolean> = () => {
  const confirm = useContext(ConfirmContext);
  return confirm;
};

export default useConfirm;
