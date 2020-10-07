/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { get, omit } from 'lodash';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@material-ui/core';

import CloseCircle from '~/icons/CloseCircle';
import Magnify from '~/icons/Magnify';
import { Size } from '~/types';

import useStyles from './styles';

export type Props = OutlinedInputProps & {
  size?: Size;
};

const SearchBarSecondary: React.FC<Props> = ({
  classes: classesProp,
  onChange,
  size = 'default',
  value,
  ...otherProps
}: Props): React.ReactElement<Props> => {
  const shouldHideCloseButton = !value;

  const classes = useStyles();

  return (
    <OutlinedInput
      classes={{
        notchedOutline: clsx(
          classes.outlinedInputNotchedOutlined,
          get(classesProp, 'notchedOutline'),
        ),
        root: clsx(
          classes.outlinedInputRoot,
          classes[size],
          get(classesProp, 'root'),
        ),
        ...(omit(classesProp, ['notchedOutline', 'root']) || {}),
      }}
      endAdornment={
        <InputAdornment
          classes={{
            root: clsx(
              classes.iconClose,
              shouldHideCloseButton && classes.iconCloseHidden,
            ),
          }}
          position="end"
        >
          <IconButton
            aria-label="Clear"
            onClick={(e: any): void => {
              if (onChange) {
                onChange({
                  ...e,
                  target: {
                    ...e.target,
                    value: '',
                  },
                });
              }
            }}
          >
            <CloseCircle fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
      inputProps={{
        'aria-label': 'Search',
      }}
      onChange={onChange}
      startAdornment={
        <InputAdornment
          classes={{
            root: classes.inputAdornmentRoot,
          }}
          position="start"
        >
          <Magnify />
        </InputAdornment>
      }
      value={value}
      {...otherProps}
    />
  );
};

// eslint-disable-next-line immutable/no-mutation
SearchBarSecondary.defaultProps = {
  size: 'default',
};

export default SearchBarSecondary;
