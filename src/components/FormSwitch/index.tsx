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
  FormControl,
  FormControlProps,
  FormControlLabel,
  FormControlLabelProps,
  Switch,
  SwitchProps,
} from '@mui/material';

export type FormSwitchProps = SwitchProps & {
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
 * # FormSwitch
 *
 * This molecule takes the basic switch and adds a label and various label capabilities
 *
 * @param formSwitchProps
 */
export function FormSwitch({
  labelProps,
  id,
  label,
  value,
  fullWidth,
  formControlProps,
  ...formSwitchProps
}: FormSwitchProps): React.ReactElement<FormSwitchProps> {
  return (
    <FormControl {...formControlProps} fullWidth={fullWidth}>
      <FormControlLabel
        checked={value}
        id={id}
        label={label}
        {...labelProps}
        control={<Switch {...formSwitchProps} />}
      />
    </FormControl>
  );
}

export default FormSwitch;
