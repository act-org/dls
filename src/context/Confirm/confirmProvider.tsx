/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { useCallback, useState } from 'react';

import { ConfirmDialog, ConfirmDialogProps } from '~/components/ConfirmDialog';

import { ConfirmContext } from './confirmContext';

type ConfirmCallback = (value: boolean | PromiseLike<boolean>) => void;
type ConfirmRejection = (reason: unknown) => void;
type Promises = {
  resolve?: ConfirmCallback;
  reject?: ConfirmRejection;
};

export type ConfirmProviderProps = {
  children: React.ReactNode;
  defaultOptions?: ConfirmDialogProps;
};
export const ConfirmProvider: React.ComponentType<ConfirmProviderProps> = (
  props: ConfirmProviderProps,
) => {
  const { children, defaultOptions = {} } = props;
  const [options, setOptions] = useState({ ...defaultOptions });
  const [resolveReject, setResolveReject] = useState<Promises>({});
  const { resolve: resolveHandler } = resolveReject;

  const confirm = useCallback(
    (confirmOptions = {}) => {
      if (resolveHandler) {
        // There is an existing hook waiting to respond, the user
        // circumvented the blocking nature of confirms, so we will
        // auto trigger a default case.
        resolveHandler(false);
      }
      // eslint-disable-next-line promise/avoid-new
      return new Promise<boolean>((resolve, reject) => {
        setOptions({ ...options, ...confirmOptions });
        setResolveReject({ reject, resolve });
      });
    },
    [options, resolveHandler],
  );

  const handleClose = useCallback(() => {
    setResolveReject({});
  }, []);

  const handleCancel = useCallback(() => {
    if (resolveHandler) {
      resolveHandler(false);
    }
    handleClose();
  }, [resolveHandler, handleClose]);

  const handleConfirm = useCallback(() => {
    if (resolveHandler) {
      resolveHandler(true);
    }
    handleClose();
  }, [resolveHandler, handleClose]);
  return (
    <>
      <ConfirmContext.Provider value={confirm}>
        {children}
      </ConfirmContext.Provider>
      <ConfirmDialog
        isOpen={resolveHandler !== undefined}
        onCancel={handleCancel}
        onClose={handleClose}
        onConfirm={handleConfirm}
        {...options}
      />
    </>
  );
};

export default ConfirmProvider;
