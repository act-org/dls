/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import JSONParseSafe from 'json-parse-safe';
import get from 'lodash/get';
import { useEffect, useState } from 'react';

import { Playground } from '~/helpers/playground';

import { SessionStorageKeySharer, SessionStorageKeySharerProps } from '.';

const Template: StoryFn<SessionStorageKeySharerProps> = ({
  keyName,
}: SessionStorageKeySharerProps) => {
  const [keyValueRaw, setKeyValue] = useState(
    sessionStorage.getItem(keyName) || '',
  );

  const keyValue = get(JSONParseSafe(keyValueRaw), 'value') || keyValueRaw;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSetKeyValue = (kv: string): void => {
    sessionStorage.setItem(keyName, kv);
    setKeyValue(kv);
  };

  useEffect((): void => {
    if (keyName) {
      handleSetKeyValue(sessionStorage.getItem(keyName) || '');
    }
  }, [handleSetKeyValue, keyName]);

  return (
    <>
      <SessionStorageKeySharer
        keyName={keyName}
        onSetKeyValue={(kv): void => {
          handleSetKeyValue(kv);
        }}
      />

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="overline">Key Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Key Value</Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>{keyName}</Typography>
              </TableCell>
              <TableCell>
                <TextField
                  onChange={(e): void => {
                    handleSetKeyValue(e.target.value);
                  }}
                  type="text"
                  value={keyValue || ''}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Button
                  color="primary"
                  onClick={(): void => {
                    handleSetKeyValue('');
                  }}
                >
                  Clear
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

/**
 * The `<SessionStorageKeySharer />` component allows a newly-opened tab to obtain
 * a key/value pair from the Session Storage of another tab. This is useful if you
 * are storing your application's auth token in Session Storage and want to allow
 * your users to open your app in another tab without having to re-authenticate.
 *
 * The implementation was inspired by
 * [this blog post](https://medium.com/@marciomariani/sharing-sessionstorage-between-tabs-5b6f42c6348c).
 *
 * Note: Since this component makes use of Session Storage and Local Storage, this
 * component is only meant to be rendered in the browser context. SSR apps should
 * not use Session Storage for key/value pairs that are critical to the render
 * (such as the user's auth token).
 */
export default {
  args: {
    keyName: 'mySessionKey',
  },
  argTypes: Playground(
    {
      keyName: { type: 'string' },
    },
    SessionStorageKeySharer,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Utilities / SessionStorageKeySharer',
} as Meta<SessionStorageKeySharerProps>;

export const Preview: StoryObj<SessionStorageKeySharerProps> = {
  args: {},
};
