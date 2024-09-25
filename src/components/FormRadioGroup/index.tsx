/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  FormControl,
  FormControlProps,
  RadioGroup,
  RadioGroupProps,
} from '@mui/material';
import { ReactElement } from 'react';

import { FormRadio, FormRadioProps } from '~/components/FormRadio';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';

export type FormRadioGroupProps = RadioGroupProps & {
  options: FormRadioProps[];
  helpText?: string;
  formControlProps?: FormControlProps;
  inputLabelProps?: InputLabelProps;
  label: string;
};

export function FormRadioGroup({
  options,
  label,
  formControlProps,
  helpText,
  name,
  ...radioGroupProps
}: FormRadioGroupProps): ReactElement<FormRadioGroupProps> {
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
