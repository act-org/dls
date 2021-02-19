/** @format */

import React from 'react';
import {
  FormControl,
  FormControlProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core';
import { Switch, SwitchProps } from '../Switch';

export type FormSwitchProps = SwitchProps & {
  /**
   * Unique ID for the input.  This is required
   */
  id: string;
  label: string;
  value: boolean;
  fullWidth: boolean;
  formControlProps: FormControlProps;
  labelProps: FormControlLabelProps;
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
}: FormSwitchProps) {
  return (
    <FormControl {...formControlProps} fullWidth={fullWidth}>
      <FormControlLabel
        label={label}
        id={id}
        checked={value}
        control={<Switch {...formSwitchProps} />}
      ></FormControlLabel>
    </FormControl>
  );
}
