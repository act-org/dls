/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

import CloseCircle from '~/icons/CloseCircle';
import Magnify from '~/icons/Magnify';

import { StyledIconButton } from './styles';

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

  return (
    <OutlinedInput
      endAdornment={
        <InputAdornment position="end">
          <StyledIconButton
            aria-label="Clears the search"
            isHidden={!(internalValue && internalValue.length)}
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
            size="large"
            title="Clears the search"
          >
            <CloseCircle fontSize="small" />
          </StyledIconButton>
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
