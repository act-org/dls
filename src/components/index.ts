/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

// ACTIVE COMPONENTS -----------------------------------------------------------

export * from './Alert';
export * from './AppBarNavigation';
export * from './Dialog';
export * from './EmptyState';
export * from './FormInput';
export * from './FormSelect';
export * from './FormSwitch';
export * from './InputLabel';
export * from './Loading';
export * from './SearchBar';
export * from './ThemeProvider';

// WIP COMPONENTS --------------------------------------------------------------

export { default as FormInputGroups } from './FormInputGroups';
export type { FormInputGroupsProps } from './FormInputGroups';

export { Loading as LoadingPrimary } from './Loading';

export { default as RenderMetaTags } from './RenderMetaTags';
export type { RenderMetaTagsProps } from './RenderMetaTags';

// DEPRECATED COMPONENTS -------------------------------------------------------

export { default as DataTablePrimary } from './DataTablePrimary';
export type { DataTablePrimaryProps } from './DataTablePrimary';

export { default as TableCellBody } from './TableCellBody';
export type { TableCellBodyProps } from './TableCellBody';

export { default as TableCellHead } from './TableCellHead';
export type { TableCellHeadProps } from './TableCellHead';

export { default as TableContainerPrimary } from './TableContainerPrimary';
export type { TableContainerPrimaryProps } from './TableContainerPrimary';
