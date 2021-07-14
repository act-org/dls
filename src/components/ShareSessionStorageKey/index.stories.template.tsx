/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import JSONParseSafe from 'json-parse-safe';
import { Story } from '@storybook/react/types-6-0';
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
} from '@material-ui/core';
import { Playground } from '~/helpers/playground';

import { ShareSessionStorageKey, ShareSessionStorageKeyProps } from '.';

export const Template: Story<ShareSessionStorageKeyProps> = ({
  keyName,
}: ShareSessionStorageKeyProps) => {
  const [keyValueRaw, setKeyValue] = React.useState(
    sessionStorage.getItem(keyName) || '',
  );

  const keyValue = JSONParseSafe(keyValueRaw).value || keyValueRaw;

  const handleSetKeyValue = (kv): void => {
    sessionStorage.setItem(keyName, kv);
    setKeyValue(kv);
  };

  return (
    <>
      <ShareSessionStorageKey
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

export const argTypes = Playground(
  {
    keyName: { type: 'string' },
  },
  ShareSessionStorageKey,
);
