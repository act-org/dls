/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createTheme as muiCreateTheme } from '@mui/material/styles';

import { CustomTheme, CustomThemeOptions } from '@actinc/dls/types';

export const createTheme = <T extends object>(
  options: CustomThemeOptions<T>,
  ...args: object[]
): CustomTheme<T> => muiCreateTheme(options, ...args) as CustomTheme<T>;

export default createTheme;
