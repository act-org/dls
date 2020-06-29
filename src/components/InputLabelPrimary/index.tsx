/**
 * @prettier
 */

import * as React from 'react';

import InputLabelBase, {
  Props as InputLabelBaseProps,
} from '~/components/InputLabelBase';

import useStyles from './styles';

export type Props = InputLabelBaseProps;

const InputLabelPrimary: React.FC<Props> = ({
  children,
  required,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <InputLabelBase
      classes={{
        root: classes.labelRoot,
      }}
      {...otherProps}
    >
      <div className="label-split">
        <span>{children}</span>

        {required && <span className="required">Required</span>}
      </div>
    </InputLabelBase>
  );
};

export default InputLabelPrimary;
