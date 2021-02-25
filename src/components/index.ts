/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/**
 * Main exports
 */
export * from './Alert';
export * from './AppBar';
export * from './Button';
export * from './Container';
export * from './DataGrid';
export * from './Dialog';
export * from './DialogTitle';
export * from './DialogActions';
export * from './DialogContent';
export * from './DialogContentText';
export * from './Drawer';
export * from './EmptyState';
export * from './FormInput';
export * from './FormSelect';
export * from './FormSwitch';
export * from './IconButton';
export * from './Input';
export * from './InputLabel';
export * from './Link';
export * from './Loading';
export * from './SearchBar';
export * from './Select';
export * from './Switch';
export * from './ThemeProvider';
export * from './Toolbar';
export * from './Typography';
/**
 * Should we re-export using the old names for 1-2 versions?
 */
export { Loading as LoadingPrimary } from './Loading';

/**
 * Yet to be converted / migrated
 */
export { default as DataTablePrimary } from './DataTablePrimary';
export type { Props as DataTablePrimaryProps } from './DataTablePrimary';

export { default as FormInputGroupsPrimary } from './FormInputGroupsPrimary';
export type { Props as FormInputGroupsPrimaryProps } from './FormInputGroupsPrimary';

export { default as RenderMetaTagsBase } from './RenderMetaTagsBase';
export type { Props as RenderMetaTagsBaseProps } from './RenderMetaTagsBase';

export { default as TableCellBody } from './TableCellBody';
export type { Props as TableCellBodyProps } from './TableCellBody';

export { default as TableCellHead } from './TableCellHead';
export type { Props as TableCellHeadProps } from './TableCellHead';

export { default as TableContainerPrimary } from './TableContainerPrimary';
export type { Props as TableContainerPrimaryProps } from './TableContainerPrimary';
