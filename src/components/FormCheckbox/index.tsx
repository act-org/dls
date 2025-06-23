/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormControlProps,
} from '@mui/material';
import { ReactElement } from 'react';

export type FormCheckboxProps = CheckboxProps & {
  /**
   * Unique ID for the input.  This is required
   */
  id: string;
  label: string;
  // eslint-disable-next-line  react/boolean-prop-naming
  value?: boolean;
  // eslint-disable-next-line  react/boolean-prop-naming
  fullWidth?: boolean;
  formControlProps?: FormControlProps;
  labelProps?: FormControlLabelProps;
};

export function FormCheckbox({
  labelProps,
  id,
  label,
  value,
  fullWidth,
  formControlProps,
  ...formSwitchProps
}: FormCheckboxProps): ReactElement<FormCheckboxProps> {
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
