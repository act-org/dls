/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import { snapshot } from '~/helpers/test';

import DataTablePrimary from '.';

interface Item {
  id: string;
  name: string;
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

describe('DataTablePrimary', () => {
  const Component = (
    <DataTablePrimary
      columns={[
        {
          label: 'ID',
          renderValue: (i: Item): string => i.id,
          sortBy: 'id',
          style: {
            width: 50,
          },
        },
        {
          label: 'Name',
          renderValue: (i: Item): string => i.name,
          sortBy: 'name',
          style: {
            width: 100,
          },
        },
        {
          label: 'Field A',
          renderValue: (i: Item): string => i.fieldA,
          sortBy: 'fieldA',
          style: {
            width: 100,
          },
        },
        {
          label: 'Field B',
          renderValue: (i: Item): string => i.fieldB,
          sortBy: 'fieldB',
          style: {
            width: 100,
          },
        },
        {
          label: 'Field C',
          renderValue: (i: Item): string => i.fieldC,
          sortBy: 'fieldC',
          style: {
            width: 100,
          },
        },
      ]}
      currentSortObject={{
        sortBy: 'id',
        sortDirection: 'ASCENDING',
      }}
      items={Array(...Array(5)).map((_, i): any => ({
        fieldA: `Field A${i + 1}`,
        fieldB: `Field B${i + 1}`,
        fieldC: `Field C${i + 1}`,
        id: i + 1,
        name: `Item ${i + 1}`,
      }))}
      onChangeSort={noop}
    />
  );
  snapshot(Component);
});
