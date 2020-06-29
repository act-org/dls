/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { get } from 'lodash';

import { AlertOutline } from '~/icons';
import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';
import InputBase, { Props as InputBaseProps } from '~/components/InputBase';
import InputLabelPrimary, {
  Props as InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';

import useStyles from './styles';

export interface Props {
  inputProps?: InputBaseProps;
  labelProps?: InputLabelPrimaryProps;
}

const FormInputPrimary: React.FC<Props> = ({
  inputProps,
  labelProps,
}: Props): React.ReactElement<Props> => {
  const required =
    get(inputProps, 'required') || get(labelProps, 'required') || false;
  const type: any = get(inputProps, 'type') || 'text';
  const value: any = get(inputProps, 'value') || '';

  const classes = useStyles();

  const children = (
    <div className="inputContainer">
      <InputBase
        classes={{
          input: clsx(
            classes.inputBaseInput,
            type === 'password' &&
              value &&
              String(value).length > 0 &&
              classes.inputBaseInputPassword,
          ),
          root: classes.inputBaseRoot,
        }}
        disableUnderline
        fullWidth
        margin="dense"
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
          .contentContainer {
            margin-bottom: ${DIMS.LAYOUT_PADDING / 2}px;
          }
          .inputContainer {
            position: relative;
          }
        `}
      </style>

      {labelProps && (
        <div className="contentContainer">
          <InputLabelPrimary required={required} {...labelProps} />
        </div>
      )}

      {children}
    </>
  );
};

export default FormInputPrimary;
