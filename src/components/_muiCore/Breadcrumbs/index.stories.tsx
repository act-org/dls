/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import ChevronRightIcon from 'mdi-material-ui/ChevronRight';
import HomeIcon from 'mdi-material-ui/Home';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Breadcrumbs, BreadcrumbsProps } from './internal';

/**
 * The default Breadcrumbs exports
 */
export default {
  args: {},
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Breadcrumbs',
} as Meta<Breadcrumbs>;

type Story = StoryObj<BreadcrumbsProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Link color="inherit" href="/category">
        Category
      </Link>
      <Typography color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Breadcrumbs),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Link color="inherit" href="/category">
        Category
      </Link>
      <Typography color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<BreadcrumbsProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Breadcrumbs" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="With Custom Separator" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Link color="inherit" href="/subcategory">
                Subcategory
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="With Icons" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" sx={{ alignItems: 'center', display: 'flex' }}>
                <HomeIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="Long Breadcrumb Trail" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb" maxItems={3}>
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Link color="inherit" href="/subcategory">
                Subcategory
              </Link>
              <Link color="inherit" href="/subsubcategory">
                Sub-subcategory
              </Link>
              <Link color="inherit" href="/deep">
                Deep Category
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="Collapsed Breadcrumbs" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Link color="inherit" href="/subcategory">
                Subcategory
              </Link>
              <Link color="inherit" href="/subsubcategory">
                Sub-subcategory
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="With Custom Separator Icon" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="small" />}>
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="Simple Two Level" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
          </StoryVariation>

          <StoryVariation label="With Disabled Link" sx={{ p: 4 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/category">
                Category
              </Link>
              <Typography color="text.secondary">Disabled Page</Typography>
              <Typography color="text.primary">Current Page</Typography>
            </Breadcrumbs>
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
