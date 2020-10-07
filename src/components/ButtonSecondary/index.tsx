/**
 * @prettier
 */
/* eslint-disable react/display-name */

import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import clsx from 'clsx';
import { get, omit } from 'lodash';

import useStyles from './styles';

export type Props = Omit<ButtonProps, 'size'> & {
  size?: 'default' | 'large' | 'small';
};

const ButtonSecondary: React.FC<Props> = React.forwardRef<
  HTMLButtonElement,
  Props
>(
  (
    { classes: classesProp, size = 'default', ...otherProps }: Props,
    ref,
  ): React.ReactElement<Props> => {
    const classes = useStyles();

    return (
      <Button
        classes={{
          contained: clsx(
            classes.contained,
            classes[size],
            get(classesProp, 'contained'),
          ),
          label: clsx(classes.label, get(classesProp, 'label')),
          outlined: clsx(
            classes.outlined,
            classes[size],
            get(classesProp, 'outlined'),
          ),
          ...(omit(classesProp, ['contained', 'outlined', 'label']) || {}),
        }}
        disableElevation
        ref={ref}
        variant="outlined"
        {...otherProps}
      />
    );
  },
);

// eslint-disable-next-line immutable/no-mutation
ButtonSecondary.defaultProps = {
  size: 'default',
};

export default ButtonSecondary;
