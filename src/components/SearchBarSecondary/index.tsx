/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@material-ui/core';

import CloseCircle from '~/icons/CloseCircle';
import Magnify from '~/icons/Magnify';

import useStyles from './styles';

type Props = OutlinedInputProps & {
  size?: 'default' | 'large';
};

const SearchBarSecondary: React.FC<Props> = ({
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
        notchedOutline: classes.outlinedInputNotchedOutlined,
        root: clsx(classes.outlinedInputRoot, classes[size]),
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
