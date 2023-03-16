/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { TablePaginationActions, TablePaginationActionsProps } from '.';

export const Template: Story<TablePaginationActionsProps> = args => {
  const [page, setPage] = useState(0);

  return (
    <TablePaginationActions
      {...args}
      onPageChange={(_, p): void => {
        setPage(p);
      }}
      page={page}
    />
  );
};
Template.args = {};

export const argTypes = Playground(
  {
    count: {},
    disabled: {},
    noun: {},
    onPageChange: {},
    page: {},
    rowsPerPage: {},
    tooltipPlacement: {},
    variant: {},
  },
  TablePaginationActions,
);
