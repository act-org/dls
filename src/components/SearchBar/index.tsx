/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
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
import { makeStyles } from '@material-ui/core/styles';

import CloseCircle from '~/icons/CloseCircle';
import Magnify from '~/icons/Magnify';

const useStyles = makeStyles({
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
});

export type SearchBarProps = OutlinedInputProps;

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
    <OutlinedInput
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
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
            title="Clears the search"
          >
            <CloseCircle fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
      inputProps={{
        'aria-label': 'Search',
      }}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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

export default SearchBar;
