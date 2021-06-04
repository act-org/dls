/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { Tooltip } from '@material-ui/core';

import AlertOutline from '~/icons/AlertOutline';
import COLORS from '~/constants/colors';
import InputLabelPrimary, {
  InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';
import InputPrimary, { InputPrimaryProps } from '~/components/InputPrimary';

import useStyles from './styles';

export interface FormInputPrimaryProps {
  disabled?: boolean;
  errorMessage?: string;
  inputProps?: InputPrimaryProps;
  labelProps?: InputLabelPrimaryProps;
  required?: boolean;
}

export const FormInputPrimary: React.FC<FormInputPrimaryProps> = ({
  disabled,
  errorMessage,
  inputProps,
  labelProps,
  required,
}: FormInputPrimaryProps): React.ReactElement<FormInputPrimaryProps> => {
  const classes = useStyles();

  const children = (
    <div className={classes.inputContainer}>
      <InputPrimary
        disabled={disabled}
        error={!!errorMessage || get(inputProps, 'error')}
        fullWidth
        required={required}
        {...inputProps}
      />

      {errorMessage && (
        <Tooltip arrow placement="top" title={errorMessage}>
          <AlertOutline
            classes={{
              root: classes.warning,
            }}
            htmlColor={COLORS.REQUIRED}
          />
        </Tooltip>
      )}
    </div>
  );

  return (
    <>
      {labelProps && (
        <div className={classes.labelContainer}>
          <InputLabelPrimary
            disabled={disabled}
            error={!!errorMessage || get(labelProps, 'error')}
            required={required}
            {...labelProps}
          />
        </div>
      )}

      {children}
    </>
  );
};

export default FormInputPrimary;
