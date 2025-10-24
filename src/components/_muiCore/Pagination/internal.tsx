/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
  PaginationItem as MuiPaginationItem,
  PaginationItemProps as MuiPaginationItemProps,
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material';

export const Pagination = MuiPagination;
export type Pagination = typeof MuiPagination;
export type PaginationProps = MuiPaginationProps;

export const PaginationItem = MuiPaginationItem;
export type PaginationItem = typeof MuiPaginationItem;
export type PaginationItemProps = MuiPaginationItemProps;

export const TablePagination = MuiTablePagination;
export type TablePagination = typeof MuiTablePagination;
export type TablePaginationProps = MuiTablePaginationProps;
