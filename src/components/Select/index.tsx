/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@material-ui/core';

export type SelectProps = MuiSelectProps;

/**
 * # Select
 *
 * @param selectProps
 */
export function Select(
  selectProps: SelectProps,
): React.ReactElement<SelectProps> {
  return <MuiSelect {...selectProps} />;
}

export default Select;
