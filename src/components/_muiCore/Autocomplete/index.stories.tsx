/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

export const WithAutocomplete: StoryObj<Autocomplete> = {
  args: { autoComplete: true },
};

export const WithoutAutocomplete: StoryObj<Autocomplete> = {
  args: { autoComplete: false },
};

export const WithAutohighlight: StoryObj<Autocomplete> = {
  args: { autoHighlight: true },
};

export const WithAutoselect: StoryObj<Autocomplete> = {
  args: { autoSelect: true },
};

export const WithAutohighlightAndAutoSelect: StoryObj<Autocomplete> = {
  args: { autoHighlight: true, autoSelect: true },
};

export const FreeSolo: StoryObj<Autocomplete> = {
  args: { freeSolo: true },
};

export const IncludeInputInList: StoryObj<Autocomplete> = {
  args: { includeInputInList: true },
};

export const OpenOnFocus: StoryObj<Autocomplete> = {
  args: { openOnFocus: true },
};

export const SelectOnFocus: StoryObj<Autocomplete> = {
  args: { selectOnFocus: true },
};
