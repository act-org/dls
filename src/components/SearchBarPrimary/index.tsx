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

export type Props = OutlinedInputProps;

const SearchBarPrimary: React.FC<Props> = ({
  onChange,
  value,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const shouldHideCloseButton = !value;

  const classes = useStyles();

  return (
    <OutlinedInput
      classes={{
        notchedOutline: classes.outlinedInputNotchedOutlined,
        root: classes.outlinedInputRoot,
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

export default SearchBarPrimary;
