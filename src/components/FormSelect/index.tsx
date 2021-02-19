/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { MenuItem } from '@material-ui/core';

import AlertOutline from '~/icons/AlertOutline';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';
import { Select, SelectProps } from '~/components/Select';

import useStyles from './styles';

interface SelectOption {
  label: string | null;
  value: number | string;
}

export interface FormSelectProps extends SelectProps {
  label?: string;
  labelProps?: InputLabelProps;
  options?: SelectOption[];
  placeholder?: string;
  placeholderIsDisabled?: boolean;
}

export function FormSelect({
  id,
  disabled,
  label,
  labelProps,
  options = [],
  placeholder,
  placeholderIsDisabled,
  required,
  ...selectProps
}: FormSelectProps): React.ReactElement<FormSelectProps> {
  const classes = useStyles();

  const children = (
    <div className={classes.selectContainer}>
      <Select {...selectProps} disabled={disabled} id={id} required={required}>
        <MenuItem
          classes={{ root: classes.selectOptionRoot }}
          disabled={placeholderIsDisabled}
          value="undefined"
        >
          {placeholder || 'Select'}
        </MenuItem>

        {options.map(
          ({ label: optionLabel, value: optionValue }): React.ReactElement => (
            <MenuItem
              classes={{ root: classes.selectOptionRoot }}
              key={optionValue}
              value={optionValue}
            >
              {optionLabel}
            </MenuItem>
          ),
        )}
      </Select>

      {get(selectProps, 'error') && <AlertOutline />}
    </div>
  );

  return (
    <>
      <div className={classes.labelContainer}>
        <InputLabel
          disabled={disabled}
          htmlFor={id}
          required={required}
          {...labelProps}
        >
          {label}
        </InputLabel>
      </div>
      {children}
    </>
  );
}
