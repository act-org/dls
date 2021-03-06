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
  RadioGroup,
  RadioGroupProps,
} from '@material-ui/core';

import { FormRadio, FormRadioProps } from '~/components/FormRadio';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';

export type FormRadioGroupProps = RadioGroupProps & {
  options: FormRadioProps[];
  helpText?: string;
  formControlProps?: FormControlProps;
  inputLabelProps?: InputLabelProps;
  label: string;
};

/**
 * # FormRadioGroup
 *
 * This moleculs wraps several controls together to bring a radio group
 * along with a label and options to display
 *
 * @param formSwitchProps
 */
export function FormRadioGroup({
  options,
  label,
  formControlProps,
  helpText,
  name,
  ...radioGroupProps
}: FormRadioGroupProps): React.ReactElement<FormRadioGroupProps> {
  return (
    <FormControl {...formControlProps}>
      <InputLabel helpText={helpText}>{label}</InputLabel>
      <RadioGroup aria-label={name} {...radioGroupProps}>
        {options.map(option => (
          <FormRadio
            id={option.id}
            key={option.id}
            label={option.label}
            value={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default FormRadioGroup;
