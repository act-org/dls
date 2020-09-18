/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { Tooltip } from '@material-ui/core';

import AlertOutline from '~/icons/AlertOutline';
import COLORS from '~/constants/colors';
import InputLabelPrimary, {
  Props as InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';
import InputPrimary, {
  Props as InputPrimaryProps,
} from '~/components/InputPrimary';

import useStyles from './styles';

export interface Props {
  disabled?: boolean;
  errorMessage?: string;
  inputProps?: InputPrimaryProps;
  labelProps?: InputLabelPrimaryProps;
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
