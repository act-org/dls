/**
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
      <Select {...selectProps} id={id} disabled={disabled} required={required}>
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
    <React.Fragment>
      <div className={classes.labelContainer}>
        <InputLabel
          htmlFor={id}
          disabled={disabled}
          required={required}
          {...labelProps}
        >
          {label}
        </InputLabel>
      </div>
      {children}
    </React.Fragment>
  );
}
