/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioProps,
} from '@mui/material';
import { ReactElement } from 'react';

export type FormRadioProps = RadioProps & {
  /**
   * Unique ID for the input.  This is required
   */
  id: string;
  label: string | ReactElement;
  labelProps?: FormControlLabelProps;
};

/**
 * # FormRadio
 *
 * This molecule takes the basic switch and adds a label and various label capabilities
 *
 * @param formSwitchProps
 */
export function FormRadio({
  labelProps,
  id,
  label,
  value,
  ...formSwitchProps
}: FormRadioProps): ReactElement<FormRadioProps> {
  return (
    <FormControlLabel
      id={id}
      label={label}
      value={value}
      {...labelProps}
      control={<Radio {...formSwitchProps} />}
    />
  );
}

export default FormRadio;
