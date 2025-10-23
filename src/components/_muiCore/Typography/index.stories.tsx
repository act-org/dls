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

import { Typography, TypographyProps } from './internal';

/**
 * The default Typography exports
 */
export default {
  args: {
    children: 'Lorem ipsum dolor',
  },
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Typography',
} as Meta<Typography>;

type Story = StoryObj<TypographyProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: 'Lorem ipsum dolor',
    variant: 'body1',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: 'Lorem ipsum dolor',
    variant: 'body1',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Typography),
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
    stories[theme] = createThemeStory<TypographyProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Heading 1">
            <Typography variant="h1">Heading 1</Typography>
          </StoryVariation>

          <StoryVariation label="Heading 2">
            <Typography variant="h2">Heading 2</Typography>
          </StoryVariation>

          <StoryVariation label="Heading 3">
            <Typography variant="h3">Heading 3</Typography>
          </StoryVariation>

          <StoryVariation label="Heading 4">
            <Typography variant="h4">Heading 4</Typography>
          </StoryVariation>

          <StoryVariation label="Heading 5">
            <Typography variant="h5">Heading 5</Typography>
          </StoryVariation>

          <StoryVariation label="Heading 6">
            <Typography variant="h6">Heading 6</Typography>
          </StoryVariation>

          <StoryVariation label="Body 1">
            <Typography variant="body1">Body 1 text with normal weight and size</Typography>
          </StoryVariation>

          <StoryVariation label="Body 2">
            <Typography variant="body2">Body 2 text with smaller size</Typography>
          </StoryVariation>

          <StoryVariation label="Subtitle 1">
            <Typography variant="subtitle1">Subtitle 1 text</Typography>
          </StoryVariation>

          <StoryVariation label="Subtitle 2">
            <Typography variant="subtitle2">Subtitle 2 text</Typography>
          </StoryVariation>

          <StoryVariation label="Button Text">
            <Typography variant="button">Button text</Typography>
          </StoryVariation>

          <StoryVariation label="Caption">
            <Typography variant="caption">Caption text</Typography>
          </StoryVariation>

          <StoryVariation label="Overline">
            <Typography variant="overline">Overline text</Typography>
          </StoryVariation>

          <StoryVariation label="Color Primary">
            <Typography color="primary" variant="h6">
              Primary color text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Color Secondary">
            <Typography color="secondary" variant="h6">
              Secondary color text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Color Error">
            <Typography color="error" variant="h6">
              Error color text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Color Info">
            <Typography color="info" variant="h6">
              Info color text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Color Success">
            <Typography color="success" variant="h6">
              Success color text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Color Warning">
            <Typography color="warning" variant="h6">
              Warning color text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Align Center">
            <Typography align="center" variant="h6">
              Centered text
            </Typography>
          </StoryVariation>

          <StoryVariation label="Align Right">
            <Typography align="right" variant="h6">
              Right aligned text
            </Typography>
          </StoryVariation>

          <StoryVariation label="No Wrap">
            <Typography noWrap sx={{ maxWidth: 200 }} variant="body1">
              This is a very long text that should be truncated with no wrap
            </Typography>
          </StoryVariation>

          <StoryVariation label="Gutter Bottom">
            <Typography gutterBottom variant="h6">
              Text with gutter bottom
            </Typography>
            <Typography variant="body2">Following text</Typography>
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
