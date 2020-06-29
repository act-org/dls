/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';

import { AlertOutline } from '~/icons';
import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';
import InputLabelPrimary, {
  Props as InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';
import InputPrimary, {
  Props as InputPrimaryProps,
} from '~/components/InputPrimary';

import useStyles from './styles';

export interface Props {
  disabled?: boolean;
  inputProps?: InputPrimaryProps;
  labelProps?: InputLabelPrimaryProps;
  required?: boolean;
}

const FormInputPrimary: React.FC<Props> = ({
  disabled,
  inputProps,
  labelProps,
  required,
}: Props): React.ReactElement<Props> => {
  const classes = useStyles();

  const children = (
    <div className="inputContainer">
      <InputPrimary
        disabled={disabled}
        fullWidth
        required={required}
        {...inputProps}
      />

      {get(inputProps, 'error') && (
        <AlertOutline
          classes={{
            root: classes.warning,
          }}
          htmlColor={COLORS.REQUIRED}
        />
      )}
    </div>
  );

  return (
    <>
      <style jsx>
        {`
          .labelContainer {
            margin-bottom: ${DIMS.LAYOUT_PADDING / 2}px;
          }
          .inputContainer {
            position: relative;
          }
        `}
      </style>

      {labelProps && (
        <div className="labelContainer">
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

export default FormInputPrimary;
