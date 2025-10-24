/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { FC, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { TablePaginationActions, TablePaginationActionsProps } from '.';

const Template: StoryFn<TablePaginationActionsProps> = args => {
  const [page, setPage] = useState(0);

  return (
    <TablePaginationActions
      {...args}
      onPageChange={(_, p): void => {
        setPage(p);
      }}
      page={page}
    />
  );
};

/**
 * The `<TablePaginationActions />` component provides pagination controls for tables.
 */
export default {
  args: {
    count: 100,
    rowsPerPage: 25,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      count: {},
      disabled: {},
      noun: {},
      onPageChange: {},
      page: {},
      rowsPerPage: {},
      tooltipPlacement: {},
      variant: {},
    },
    TablePaginationActions,
  ),
  component: TablePaginationActions,
  parameters: {
    layout: 'padded',
  },
  render: Template,
  tags: ['autodocs'],
  title: 'Molecules / TablePaginationActions',
} as Meta<TablePaginationActionsProps>;

type Story = StoryObj<TablePaginationActionsProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    count: 100,
    rowsPerPage: 25,
  },
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    count: 100,
    rowsPerPage: 25,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      count: {},
      disabled: {},
      noun: {},
      onPageChange: {},
      page: {},
      rowsPerPage: {},
      tooltipPlacement: {},
      variant: {},
    },
    TablePaginationActions,
  ),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Component for theme stories that includes required props
const ThemeStoryComponent: FC<Partial<TablePaginationActionsProps>> = props => {
  const [page, setPage] = useState(0);

  return (
    <TablePaginationActions
      count={100}
      rowsPerPage={25}
      {...props}
      onPageChange={(_, p): void => {
        setPage(p);
      }}
      page={page}
    />
  );
};

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<TablePaginationActionsProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <ThemeStoryComponent count={100} rowsPerPage={25} />
          </StoryVariation>

          <StoryVariation label="Disabled">
            <ThemeStoryComponent count={100} disabled rowsPerPage={25} />
          </StoryVariation>

          <StoryVariation label="Custom Noun">
            <ThemeStoryComponent count={100} noun="Thing" rowsPerPage={25} />
          </StoryVariation>

          <StoryVariation label="Custom Tooltip Placement">
            <ThemeStoryComponent count={100} rowsPerPage={25} tooltipPlacement="top" />
          </StoryVariation>

          <StoryVariation label="Inverted Variant">
            <ThemeStoryComponent count={100} rowsPerPage={25} variant="inverted" />
          </StoryVariation>

          <StoryVariation label="Large Dataset">
            <ThemeStoryComponent count={1000} rowsPerPage={50} />
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
