/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Tab as MuiTab,
  TabProps as MuiTabProps,
  TabScrollButton as MuiTabScrollButton,
  TabScrollButtonProps as MuiTabScrollButtonProps,
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
} from '@mui/material';

export const Tabs = MuiTabs;
export type Tabs = typeof MuiTabs;
export type TabsProps = MuiTabsProps;

export const Tab = MuiTab;
export type Tab = typeof MuiTab;
export type TabProps = MuiTabProps;

export const TabScrollButton = MuiTabScrollButton;
export type TabScrollButton = typeof MuiTabScrollButton;
export type TabScrollButtonProps = MuiTabScrollButtonProps;
