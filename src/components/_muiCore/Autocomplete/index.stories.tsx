/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { AutocompleteRenderInputParams, Chip, TextField } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { ReactElement } from 'react';

import {
  Autocomplete,
  AutocompleteProps,
  FilmType,
  topFilms,
} from './internal';

export default {
  args: {
    disablePortal: false,
    options: topFilms,
    renderInput: (params: AutocompleteRenderInputParams) => (
      <TextField {...params} label="Movie" />
    ),
  },
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Autocomplete',
} as Meta<Autocomplete>;

export const Primary: StoryObj<Autocomplete> = { args: { color: 'primary' } };

export const Multiple = {
  render: (
    args: AutocompleteProps<FilmType, true, false, false, typeof Chip>,
  ): ReactElement<unknown> => (
    <Autocomplete
      {...args}
      getOptionLabel={(option): string => option.label}
      multiple
      renderTags={(value: FilmType[], getTagProps): ReactElement<unknown>[] =>
        value.map((option: FilmType, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <Chip
            label={option.label}
            variant="outlined"
            {...getTagProps({ index })}
          />
        ))
      }
    />
  ),
};
