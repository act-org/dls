/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
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
import { Story } from '@storybook/react/types-6-0';
import JSONParseSafe from 'json-parse-safe';
import { useEffect, useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { SessionStorageKeySharer, SessionStorageKeySharerProps } from '.';

export const Template: Story<SessionStorageKeySharerProps> = ({
  keyName,
}: SessionStorageKeySharerProps) => {
  const [keyValueRaw, setKeyValue] = useState(
    sessionStorage.getItem(keyName) || '',
  );

  const keyValue = JSONParseSafe(keyValueRaw).value || keyValueRaw;

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

export const argTypes = Playground(
  {
    keyName: { type: 'string' },
  },
  SessionStorageKeySharer,
);
