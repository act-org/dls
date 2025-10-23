/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AutocompleteRenderInputParams, TextField } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Autocomplete, AutocompleteProps, FilmType, topFilms } from './internal';

/**
 * The default Autocomplete exports
 */
export default {
  args: {
    disablePortal: false,
    options: topFilms,
    renderInput: (params: AutocompleteRenderInputParams) => <TextField {...params} label="Movie" />,
  },
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Autocomplete',
} as Meta<Autocomplete>;

type Story = StoryObj<AutocompleteProps<FilmType, false, false, false>>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    options: topFilms,
    renderInput: (params: AutocompleteRenderInputParams) => <TextField {...params} label="Movie" />,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    options: topFilms,
    renderInput: (params: AutocompleteRenderInputParams) => <TextField {...params} label="Movie" />,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Autocomplete),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<AutocompleteProps<FilmType, false, false, false>>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          {/* Default Autocomplete */}
          <Autocomplete options={topFilms} renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Default" />} />

          {/* Multiple Selection */}
          <Autocomplete
            multiple
            options={topFilms}
            renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Multiple" />}
            style={{ marginTop: 16 }}
          />

          {/* Free Solo */}
          <Autocomplete
            freeSolo
            options={topFilms}
            renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Free Solo" />}
            style={{ marginTop: 16 }}
          />

          {/* With Auto Highlight */}
          <Autocomplete
            autoHighlight
            options={topFilms}
            renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Auto Highlight" />}
            style={{ marginTop: 16 }}
          />
        </ThemeProvider>
      ),
    });

    return stories;
  },
  {} as Record<string, Story>,
);

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
