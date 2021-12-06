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

import { TablePaginationActions, TablePaginationActionsProps } from '.';
import { Playground } from '~/helpers/playground';

export const Template: Story<TablePaginationActionsProps> = args => {
  const [page, setPage] = React.useState(0);

  return (
    <TablePaginationActions<Thing>
      onPageChange={(_, p): void => {
        setPage(p);
      }}
      page={page}
      {...args}
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
