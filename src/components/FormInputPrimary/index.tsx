/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { Tooltip } from '@material-ui/core';

import AlertOutline from '~/icons/AlertOutline';
import COLORS from '~/constants/colors';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';
import { Input, InputProps } from '~/components/Input';

import useStyles from './styles';

export interface Props {
  disabled?: boolean;
  errorMessage?: string;
  inputProps?: InputProps;
  labelProps?: InputLabelProps;
  required?: boolean;
}

const FormInputPrimary: React.FC<Props> = ({
  disabled,
  errorMessage,
  inputProps,
  labelProps,
  required,
}: Props): React.ReactElement<Props> => {
  const classes = useStyles();

  const children = (
    <div className={classes.inputContainer}>
      <Input
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
          <InputLabel
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
