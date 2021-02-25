/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import React from 'react';
import {
  FormControl,
  FormControlProps,
  FormControlLabel,
  FormControlLabelProps,
  Checkbox,
  CheckboxProps,
} from '@material-ui/core';

export type FormCheckboxProps = CheckboxProps & {
  /**
   * Unique ID for the input.  This is required
   */
  id: string;
  label: string;
  value?: boolean;
  fullWidth?: boolean;
  formControlProps?: FormControlProps;
  labelProps?: FormControlLabelProps;
};

/**
 * # FormCheckbox
 *
 * This molecule takes the basic switch and adds a label and various label capabilities
 *
 * @param formSwitchProps
 */
export function FormCheckbox({
  labelProps,
  id,
  label,
  value,
  fullWidth,
  formControlProps,
  ...formSwitchProps
}: FormCheckboxProps): React.ReactElement<FormCheckboxProps> {
  return (
    <FormControl {...formControlProps} fullWidth={fullWidth}>
      <FormControlLabel
        checked={value}
        id={id}
        label={label}
        {...labelProps}
        control={<Checkbox {...formSwitchProps} />}
      />
    </FormControl>
  );
}

export default FormCheckbox;
