/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { InputLabelProps as MuiInputLabelProps, Tooltip } from '@mui/material';

import HelpCircleOutline from '~/icons/HelpCircleOutline';

import { StyledInputLabel } from './styles';

/**
 * These are the options available for an Input Label
 */
export interface InputLabelProps extends MuiInputLabelProps {
  /**
   * Add a tooltip to the label for some additional context information
   */
  helpText?: string | React.ReactElement;
  /**
   * The placement of the tool tip text.  The default is right
   */
  helpPlacement?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start';
}

/**
 * #Input Label
 *
 * This component is the primary label for various form fields.  In general, when applicable, you should use
 * a molecule or organism that already contains this component to make it easier.  This would be used in a scenario where
 * a molecule does not exist for your use case.
 * @param InputProps
 */
export const InputLabel: React.FC<InputLabelProps> = ({
  classes: classesProp,
  children,
  required,
  helpText,
  helpPlacement,
  ...otherProps
}: InputLabelProps): React.ReactElement<InputLabelProps> => (
  <StyledInputLabel classes={classesProp} {...otherProps}>
    <div className="label-split">
      <span className="label-help">
        {children}
        {helpText && (
          <Tooltip arrow placement={helpPlacement} title={helpText}>
            <HelpCircleOutline />
          </Tooltip>
        )}
      </span>
      {required && <span className="required">Required</span>}
    </div>
  </StyledInputLabel>
);

InputLabel.defaultProps = {
  helpPlacement: 'right',
} as InputLabelProps;

export default InputLabel;
