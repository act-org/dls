/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { useStorageState } from 'react-storage-hooks';

import { Playground } from '~/helpers/playground';

import { ShareSessionStorageKey, ShareSessionStorageKeyProps } from '.';

export const Template: Story<ShareSessionStorageKeyProps> = ({
  keyName,
}: ShareSessionStorageKeyProps) => {
  const [keyValue, setKeyValue] = useStorageState(sessionStorage, keyName);

  return (
    <>
      <ShareSessionStorageKey keyName={keyName} />

      <div>session key name: {keyName}</div>

      <div>
        session key value:&nbsp;
        <input
          onChange={(e): void => {
            setKeyValue(e.target.value);
          }}
          type="text"
          value={keyValue || ''}
        />
      </div>

      <button
        onClick={(): void => {
          setKeyValue('');
        }}
      >
        clear value
      </button>
    </>
  );
};

export const argTypes = Playground(
  {
    keyName: { type: 'string' },
  },
  ShareSessionStorageKey,
);
