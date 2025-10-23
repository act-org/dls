/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, RadioGroupProps } from './internal';

/**
 * The default RadioGroup exports
 */
export default {
  args: {
    children: (
      <>
        <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
        <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
        <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
      </>
    ),
    defaultValue: 'option1',
  },
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / RadioGroup',
} as Meta<RadioGroup>;

type Story = StoryObj<RadioGroupProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: (
      <>
        <FormControlLabel control={<Radio />} label="First Option" value="first" />
        <FormControlLabel control={<Radio />} label="Second Option" value="second" />
        <FormControlLabel control={<Radio />} label="Third Option" value="third" />
      </>
    ),
    defaultValue: 'first',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: (
      <>
        <FormControlLabel control={<Radio />} label="Option A" value="a" />
        <FormControlLabel control={<Radio />} label="Option B" value="b" />
        <FormControlLabel control={<Radio />} label="Option C" value="c" />
      </>
    ),
    defaultValue: 'a',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, RadioGroup),
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
    stories[theme] = createThemeStory<RadioGroupProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic RadioGroup">
            <FormControl>
              <FormLabel>Basic RadioGroup</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
                <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
                <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="With Label">
            <FormControl>
              <FormLabel>Choose an option</FormLabel>
              <RadioGroup defaultValue="option2">
                <FormControlLabel control={<Radio />} label="First Choice" value="option1" />
                <FormControlLabel control={<Radio />} label="Second Choice" value="option2" />
                <FormControlLabel control={<Radio />} label="Third Choice" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Row Direction">
            <FormControl>
              <FormLabel>Horizontal RadioGroup</FormLabel>
              <RadioGroup defaultValue="option1" row>
                <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
                <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
                <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <FormControl disabled>
              <FormLabel>Disabled RadioGroup</FormLabel>
              <RadioGroup defaultValue="option2">
                <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
                <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
                <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="With Helper Text">
            <FormControl>
              <FormLabel>RadioGroup with Helper Text</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
                <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
                <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
              </RadioGroup>
              <FormHelperText>Please select one of the options above</FormHelperText>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Error State">
            <FormControl error>
              <FormLabel>RadioGroup with Error</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
                <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
                <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
              </RadioGroup>
              <FormHelperText>This field is required</FormHelperText>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Required">
            <FormControl required>
              <FormLabel>Required RadioGroup</FormLabel>
              <RadioGroup defaultValue="option2">
                <FormControlLabel control={<Radio />} label="Option 1" value="option1" />
                <FormControlLabel control={<Radio />} label="Option 2" value="option2" />
                <FormControlLabel control={<Radio />} label="Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Color Variants">
            <FormControl>
              <FormLabel>Primary Color</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio color="primary" />} label="Primary Option 1" value="option1" />
                <FormControlLabel control={<Radio color="primary" />} label="Primary Option 2" value="option2" />
                <FormControlLabel control={<Radio color="primary" />} label="Primary Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Secondary Color">
            <FormControl>
              <FormLabel>Secondary Color</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio color="secondary" />} label="Secondary Option 1" value="option1" />
                <FormControlLabel control={<Radio color="secondary" />} label="Secondary Option 2" value="option2" />
                <FormControlLabel control={<Radio color="secondary" />} label="Secondary Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Size Variants">
            <FormControl>
              <FormLabel>Small Size</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio size="small" />} label="Small Option 1" value="option1" />
                <FormControlLabel control={<Radio size="small" />} label="Small Option 2" value="option2" />
                <FormControlLabel control={<Radio size="small" />} label="Small Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Large Size">
            <FormControl>
              <FormLabel>Large Size</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel control={<Radio size="medium" />} label="Large Option 1" value="option1" />
                <FormControlLabel control={<Radio size="medium" />} label="Large Option 2" value="option2" />
                <FormControlLabel control={<Radio size="medium" />} label="Large Option 3" value="option3" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Multiple RadioGroups">
            <FormControl>
              <FormLabel>First Group</FormLabel>
              <RadioGroup defaultValue="group1-option1">
                <FormControlLabel control={<Radio />} label="Group 1 Option 1" value="group1-option1" />
                <FormControlLabel control={<Radio />} label="Group 1 Option 2" value="group1-option2" />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Second Group</FormLabel>
              <RadioGroup defaultValue="group2-option1">
                <FormControlLabel control={<Radio />} label="Group 2 Option 1" value="group2-option1" />
                <FormControlLabel control={<Radio />} label="Group 2 Option 2" value="group2-option2" />
              </RadioGroup>
            </FormControl>
          </StoryVariation>

          <StoryVariation label="Long Labels">
            <FormControl>
              <FormLabel>RadioGroup with Long Labels</FormLabel>
              <RadioGroup defaultValue="long1">
                <FormControlLabel
                  control={<Radio />}
                  label="This is a very long label that might wrap to multiple lines and should be handled gracefully"
                  value="long1"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Another long label option that demonstrates how the component handles extended text content"
                  value="long2"
                />
                <FormControlLabel control={<Radio />} label="Short option" value="short" />
              </RadioGroup>
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
