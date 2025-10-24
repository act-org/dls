/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FormControl, InputLabel, MenuItem, SelectProps } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import range from 'lodash/range';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Select } from './internal';

/**
 * The default Select exports
 */
export default {
  args: {
    children: range(10).map((i): any => (
      <MenuItem key={i} value={i}>
        {i + 1}
      </MenuItem>
    )),
  },
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Select',
} as Meta<Select>;

type Story = StoryObj<SelectProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: range(5).map((i): any => (
      <MenuItem key={i} value={i}>
        Option {i + 1}
      </MenuItem>
    )),
    defaultValue: 0,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: range(5).map((i): any => (
      <MenuItem key={i} value={i}>
        Option {i + 1}
      </MenuItem>
    )),
    defaultValue: 0,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Select),
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
    stories[theme] = createThemeStory<SelectProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <FormControl fullWidth>
              <InputLabel>Primary Select</InputLabel>
              <Select color="primary" defaultValue={0}>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <FormControl fullWidth>
              <InputLabel>Secondary Select</InputLabel>
              <Select color="secondary" defaultValue={1}>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Error">
            <FormControl fullWidth>
              <InputLabel>Error Select</InputLabel>
              <Select color="error" defaultValue={2}>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Info">
            <FormControl fullWidth>
              <InputLabel>Info Select</InputLabel>
              <Select color="info" defaultValue={3}>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Success">
            <FormControl fullWidth>
              <InputLabel>Success Select</InputLabel>
              <Select color="success" defaultValue={4}>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Warning">
            <FormControl fullWidth>
              <InputLabel>Warning Select</InputLabel>
              <Select color="warning" defaultValue={0}>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Small Size">
            <FormControl fullWidth>
              <InputLabel>Small Select</InputLabel>
              <Select color="primary" defaultValue={1} size="small">
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Medium Size">
            <FormControl fullWidth>
              <InputLabel>Medium Select</InputLabel>
              <Select color="primary" defaultValue={2} size="medium">
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <FormControl fullWidth>
              <InputLabel>Disabled Select</InputLabel>
              <Select color="primary" defaultValue={3} disabled>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Required">
            <FormControl fullWidth>
              <InputLabel>Required Select</InputLabel>
              <Select color="primary" defaultValue={4} required>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Multiple">
            <FormControl fullWidth>
              <InputLabel>Multiple Select</InputLabel>
              <Select color="primary" defaultValue={[0, 2]} multiple>
                {range(5).map(i => (
                  <MenuItem key={i} value={i}>
                    Option {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Native">
            <FormControl fullWidth>
              <InputLabel>Native Select</InputLabel>
              <Select color="primary" defaultValue={1} native>
                {range(5).map(i => (
                  <option key={i} value={i}>
                    Option {i + 1}
                  </option>
                ))}
              </Select>
            </FormControl>
          </StoryVariation>
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
