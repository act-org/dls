/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Input, InputProps } from '../Input';
import CloseCircle from '~/icons/CloseCircle';
import Magnify from '~/icons/Magnify';

const useStyles = makeStyles({
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
});

export type SearchBarProps = InputProps;

/**
 * # SearchBar
 *
 * This component wraps a nice visual for a search bar component the the ability to set the initial value
 * and listen for changes to the search value
 * @param SearchBarProps
 */
export function SearchBar({
  value,
  onChange,
  ...searchBarProps
}: SearchBarProps): React.ReactElement<SearchBarProps> {
  const [internalValue, setValue] = React.useState<string>(
    (value || '') as string,
  );
  const iconClasses = useStyles();
  return (
    <Input
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Clears the search"
            classes={{
              root: clsx(
                !(internalValue && internalValue.length) &&
                  iconClasses.iconCloseHidden,
              ),
            }}
            onClick={(e: any) => {
              setValue('');
              if (onChange) {
                onChange({
                  ...e,
                  target: {
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
      onChange={(e: any) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      startAdornment={
        <InputAdornment position="start">
          <Magnify />
        </InputAdornment>
      }
      value={internalValue}
      {...searchBarProps}
    />
  );
}
