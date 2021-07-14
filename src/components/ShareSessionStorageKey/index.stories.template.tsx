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

import { Playground } from '~/helpers/playground';

import { ShareSessionStorageKey, ShareSessionStorageKeyProps } from '.';

export const Template: Story<ShareSessionStorageKeyProps> = ({
  keyName,
}: ShareSessionStorageKeyProps) => {
  const [keyValueUnparsed, setKeyValue] = React.useState(
    sessionStorage.getItem(keyName) || '',
  );

  let keyValue = keyValueUnparsed;
  try {
    keyValue = JSON.parse(keyValueUnparsed);
  } catch (err) {}

  const updateKeyValue = (kv): void => {
    sessionStorage.setItem(keyName, kv);
    setKeyValue(kv);
  };

  return (
    <>
      <ShareSessionStorageKey
        keyName={keyName}
        onKeyValue={(): void => {
          updateKeyValue(kv);
        }}
      />

      <div>session key name: {keyName}</div>

      <div>
        session key value:&nbsp;
        <input
          onChange={(e): void => {
            updateKeyValue(e.target.value);
          }}
          type="text"
          value={keyValue || ''}
        />
      </div>

      <button
        onClick={(): void => {
          updateKeyValue('');
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
