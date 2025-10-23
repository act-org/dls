/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MenuItem, TextField } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { GridGenerator, GridGeneratorProps } from '.';

const Template: StoryFn<GridGeneratorProps> = (props: GridGeneratorProps) => {
  const [value1, setValue1] = useState('Value 1');
  const [value2, setValue2] = useState('Value 2');
  const [value3, setValue3] = useState('undefined');
  const [value4, setValue4] = useState('Value 4');
  const [value5, setValue5] = useState('Value 5');

  return (
    <GridGenerator
      {...props}
      groups={[
        [
          {
            children: (
              <TextField
                fullWidth
                label="Input 1"
                onChange={(e: any): void => {
                  setValue1(e.target.value);
                }}
                placeholder="Required Text"
                required
                type="text"
                value={value1}
              />
            ),
            key: 'INPUT_1',
          },
          {
            children: (
              <TextField
                fullWidth
                label="Input 2"
                onChange={(e: any): void => {
                  setValue2(e.target.value);
                }}
                placeholder="Required Password"
                required
                type="password"
                value={value2}
              />
            ),
            key: 'INPUT_2',
          },
        ],
        [
          {
            children: (
              <TextField
                fullWidth
                label="Input 3"
                onChange={(e: any): void => {
                  setValue3(e.target.value);
                }}
                select
                type="password"
                value={value3}
              >
                <MenuItem key="undefined" value="undefined">
                  Select
                </MenuItem>

                <MenuItem key="ONE" value="ONE">
                  One
                </MenuItem>

                <MenuItem key="TWO" value="TWO">
                  Two
                </MenuItem>

                <MenuItem key="THREE" value="THREE">
                  Three
                </MenuItem>
              </TextField>
            ),
            key: 'INPUT_3',
          },
        ],
        [
          {
            children: (
              <TextField
                fullWidth
                label="Input 4"
                onChange={(e: any): void => {
                  setValue4(e.target.value);
                }}
                placeholder="Required Number"
                required
                type="number"
                value={value4}
              />
            ),
            key: 'INPUT_4',
          },
          {
            children: (
              <TextField
                fullWidth
                label="Input 5"
                onChange={(e: any): void => {
                  setValue5(e.target.value);
                }}
                placeholder="Optional Text"
                type="text"
                value={value5}
              />
            ),
            key: 'INPUT_5',
          },
        ],
      ]}
    />
  );
};

/**
 * The `<GridGenerator />` component generates a responsive grid layout with form fields.
 */
export default {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, GridGenerator),
  component: GridGenerator,
  parameters: {
    layout: 'padded',
  },
  render: Template,
  tags: ['autodocs'],
  title: 'Organisms / GridGenerator',
} as Meta<GridGeneratorProps>;

type Story = StoryObj<GridGeneratorProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, GridGenerator),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<GridGeneratorProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <Template />
          </StoryVariation>

          <StoryVariation label="Single Column">
            <Template
              groups={[
                [
                  {
                    children: <TextField fullWidth label="Single Input" placeholder="Single column layout" type="text" />,
                    key: 'SINGLE_INPUT',
                  },
                ],
              ]}
            />
          </StoryVariation>

          <StoryVariation label="Two Columns">
            <Template
              groups={[
                [
                  {
                    children: <TextField fullWidth label="Input 1" placeholder="First column" type="text" />,
                    key: 'INPUT_1',
                  },
                  {
                    children: <TextField fullWidth label="Input 2" placeholder="Second column" type="text" />,
                    key: 'INPUT_2',
                  },
                ],
              ]}
            />
          </StoryVariation>

          <StoryVariation label="Three Columns">
            <Template
              groups={[
                [
                  {
                    children: <TextField fullWidth label="Input 1" placeholder="First column" type="text" />,
                    key: 'INPUT_1',
                  },
                  {
                    children: <TextField fullWidth label="Input 2" placeholder="Second column" type="text" />,
                    key: 'INPUT_2',
                  },
                  {
                    children: <TextField fullWidth label="Input 3" placeholder="Third column" type="text" />,
                    key: 'INPUT_3',
                  },
                ],
              ]}
            />
          </StoryVariation>

          <StoryVariation label="Mixed Field Types">
            <Template
              groups={[
                [
                  {
                    children: <TextField fullWidth label="Text Input" placeholder="Text field" type="text" />,
                    key: 'TEXT_INPUT',
                  },
                  {
                    children: <TextField fullWidth label="Number Input" placeholder="Number field" type="number" />,
                    key: 'NUMBER_INPUT',
                  },
                ],
                [
                  {
                    children: (
                      <TextField fullWidth label="Select Input" select>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </TextField>
                    ),
                    key: 'SELECT_INPUT',
                  },
                ],
              ]}
            />
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
