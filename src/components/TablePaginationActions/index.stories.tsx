/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { TablePaginationActions, TablePaginationActionsProps } from '.';

const Template: StoryFn<TablePaginationActionsProps> = args => {
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

export default {
  args: {
    count: 100,
    rowsPerPage: 25,
  },
  argTypes: Playground(
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
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Molecules / TablePaginationActions',
} as Meta<TablePaginationActionsProps>;

export const Preview: StoryObj<TablePaginationActionsProps> = {
  args: {},
};

export const Disabled: StoryObj<TablePaginationActionsProps> = {
  args: {
    disabled: true,
  },
};

export const CustomNoun: StoryObj<TablePaginationActionsProps> = {
  args: {
    noun: 'Thing',
  },
};

export const CustomTooltipPlacement: StoryObj<TablePaginationActionsProps> = {
  args: {
    tooltipPlacement: 'top',
  },
};

export const VariantInverted: StoryObj<TablePaginationActionsProps> = {
  args: {
    variant: 'inverted',
  },
};
