/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormControlProps,
  Switch,
  SwitchProps,
} from '@mui/material';
import { ReactElement } from 'react';

export type FormSwitchProps = SwitchProps & {
  /**
   * Unique ID for the input.  This is required
   */
  id: string;
  label: string;
  // eslint-disable-next-line react/boolean-prop-naming
  value?: boolean;
  // eslint-disable-next-line react/boolean-prop-naming
  fullWidth?: boolean;
  formControlProps?: FormControlProps;
  labelProps?: FormControlLabelProps;
};

export function FormSwitch({
  labelProps,
  id,
  label,
  value,
  fullWidth,
  formControlProps,
  ...formSwitchProps
}: FormSwitchProps): ReactElement<FormSwitchProps> {
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
