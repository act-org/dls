/**
 * Copyright (c) Encoura, LLC and its affiliates.
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
  formControlProps?: FormControlProps;
  helpText?: string;
  inputLabelProps?: InputLabelProps;
  label: string;
  options: FormRadioProps[];
};

export function FormRadioGroup({
  formControlProps,
  helpText,
  inputLabelProps,
  label,
  name,
  options,
  ...radioGroupProps
}: FormRadioGroupProps): ReactElement<FormRadioGroupProps> {
  return (
    <FormControl {...formControlProps}>
      <InputLabel helpText={helpText} {...inputLabelProps}>
        {label}
      </InputLabel>
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
