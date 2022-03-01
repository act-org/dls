/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AlertOutline from '~/icons/AlertOutline';
import InputLabelPrimary, {
  InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';
import SelectPrimary, { SelectPrimaryProps } from '~/components/SelectPrimary';

import useStyles from './styles';

interface SelectOption {
  label: string | null;
  value: number | string;
}

export interface FormSelectPrimaryProps {
  disabled?: boolean;
  labelProps?: InputLabelPrimaryProps;
  options?: SelectOption[];
  placeholder?: string;
  placeholderIsDisabled?: boolean;
  required?: boolean;
  selectProps: SelectPrimaryProps;
}

export const FormSelectPrimary: React.FC<FormSelectPrimaryProps> = ({
  disabled,
  labelProps,
  options = [],
  placeholder,
  placeholderIsDisabled,
  required,
  selectProps,
}: FormSelectPrimaryProps): React.ReactElement<FormSelectPrimaryProps> => {
  const classes = useStyles();
  const { palette } = useTheme();

  const children = (
    <div className={classes.selectContainer}>
      <SelectPrimary
        {...selectProps}
        disabled={disabled}
        fullWidth
        required={required}
        value={selectProps.value || 'undefined'}
      >
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
      </SelectPrimary>

      {get(selectProps, 'error') && (
        <AlertOutline
          classes={{
            root: classes.warning,
          }}
          htmlColor={palette.error.main}
        />
      )}
    </div>
  );

  return (
    <>
      {labelProps && (
        <div className={classes.labelContainer}>
          <InputLabelPrimary
            disabled={disabled}
            required={required}
            {...labelProps}
          />
        </div>
      )}

      {children}
    </>
  );
};

export default FormSelectPrimary;
