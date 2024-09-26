/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import { ReactElement, useState } from 'react';
import CloseCircle from '~/icons/CloseCircle';
import Magnify from '~/icons/Magnify';

import { StyledIconButton } from './styles';

export type SearchBarProps = OutlinedInputProps;

export function SearchBar({
  value,
  onChange,
  ...searchBarProps
}: SearchBarProps): ReactElement<SearchBarProps> {
  const [internalValue, setValue] = useState<string>((value || '') as string);

  return (
    <OutlinedInput
      endAdornment={
        <InputAdornment position="end">
          <StyledIconButton
            $isHidden={!(internalValue && internalValue.length)}
            aria-label="Clears the search"
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
