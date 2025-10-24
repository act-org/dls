/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import ChevronDoubleLeftIcon from 'mdi-material-ui/ChevronDoubleLeft';
import ChevronDoubleRightIcon from 'mdi-material-ui/ChevronDoubleRight';
import ChevronLeftIcon from 'mdi-material-ui/ChevronLeft';
import ChevronRightIcon from 'mdi-material-ui/ChevronRight';
import { useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader, Paper, Typography } from './internal';

// TransferList component implementation
interface TransferListProps {
  left: readonly string[];
  right: readonly string[];
  leftTitle?: string;
  rightTitle?: string;
  onMoveLeft?: (items: string[]) => void;
  onMoveRight?: (items: string[]) => void;
  onMoveAllLeft?: () => void;
  onMoveAllRight?: () => void;
  disabled?: boolean;
}

const TransferList = ({
  left,
  right,
  leftTitle = 'Choices',
  rightTitle = 'Chosen',
  onMoveLeft,
  onMoveRight,
  onMoveAllLeft,
  onMoveAllRight,
  disabled = false,
}: TransferListProps): React.ReactNode => {
  const [checked, setChecked] = useState<string[]>([]);
  const [leftChecked, setLeftChecked] = useState<string[]>([]);
  const [rightChecked, setRightChecked] = useState<string[]>([]);

  const handleToggle =
    (value: string): (() => void) =>
    () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

  const handleCheckedLeft = (): void => {
    setLeftChecked([]);
    setChecked([]);
    onMoveRight?.(leftChecked);
  };

  const handleCheckedRight = (): void => {
    setRightChecked([]);
    setChecked([]);
    onMoveLeft?.(rightChecked);
  };

  const handleAllLeft = (): void => {
    setLeftChecked([]);
    setRightChecked([]);
    setChecked([]);
    onMoveAllLeft?.();
  };

  const handleAllRight = (): void => {
    setLeftChecked([]);
    setRightChecked([]);
    setChecked([]);
    onMoveAllRight?.();
  };

  const customList = (items: readonly string[], title: string): React.ReactNode => (
    <Paper sx={{ height: 230, overflow: 'auto', width: 200 }}>
      <ListSubheader>
        <Typography variant="subtitle1">{title}</Typography>
      </ListSubheader>
      <List component="div" dense role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem disablePadding key={value}>
              <ListItemButton disabled={disabled} onClick={handleToggle(value)} role="listitem" selected={checked.includes(value)}>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
        {customList(left, leftTitle)}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <IconButton disabled={leftChecked.length === 0 || disabled} onClick={handleCheckedRight} size="small">
            <ChevronRightIcon />
          </IconButton>
          <IconButton disabled={rightChecked.length === 0 || disabled} onClick={handleCheckedLeft} size="small">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton disabled={left.length === 0 || disabled} onClick={handleAllRight} size="small">
            <ChevronDoubleRightIcon />
          </IconButton>
          <IconButton disabled={right.length === 0 || disabled} onClick={handleAllLeft} size="small">
            <ChevronDoubleLeftIcon />
          </IconButton>
        </Box>
        {customList(right, rightTitle)}
      </Box>
    </Box>
  );
};

/**
 * The default TransferList exports
 */
export default {
  args: {
    left: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    leftTitle: 'Available',
    right: ['Item 6', 'Item 7'],
    rightTitle: 'Selected',
  },
  component: TransferList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / TransferList',
} as Meta<TransferListProps>;

type Story = StoryObj<TransferListProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    left: ['Option A', 'Option B', 'Option C', 'Option D'],
    leftTitle: 'Available Options',
    right: ['Option E'],
    rightTitle: 'Selected Options',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    left: ['Choice 1', 'Choice 2', 'Choice 3'],
    leftTitle: 'Choices',
    right: ['Choice 4'],
    rightTitle: 'Selected',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, TransferList),
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
    stories[theme] = createThemeStory<TransferListProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic TransferList">
            <TransferList
              left={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
              leftTitle="Available Items"
              right={['Item 6', 'Item 7']}
              rightTitle="Selected Items"
            />
          </StoryVariation>

          <StoryVariation label="Empty Lists">
            <TransferList left={[]} leftTitle="Empty Left" right={[]} rightTitle="Empty Right" />
          </StoryVariation>

          <StoryVariation label="All Items Selected">
            <TransferList left={[]} leftTitle="Available" right={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} rightTitle="All Selected" />
          </StoryVariation>

          <StoryVariation label="Single Item Lists">
            <TransferList left={['Only Item']} leftTitle="Single Item" right={[]} rightTitle="Empty" />
          </StoryVariation>

          <StoryVariation label="Long Item Names">
            <TransferList
              left={['Very Long Item Name That Might Wrap', 'Another Extremely Long Item Name', 'Short', 'Medium Length Item Name']}
              leftTitle="Long Names"
              right={['Selected Long Item']}
              rightTitle="Selected"
            />
          </StoryVariation>

          <StoryVariation label="Many Items">
            <TransferList
              left={Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)}
              leftTitle="Many Available"
              right={['Selected 1', 'Selected 2']}
              rightTitle="Few Selected"
            />
          </StoryVariation>

          <StoryVariation label="Custom Titles">
            <TransferList left={['Option A', 'Option B', 'Option C']} leftTitle="Source Options" right={['Option D']} rightTitle="Target Options" />
          </StoryVariation>

          <StoryVariation label="Disabled State">
            <TransferList disabled left={['Item 1', 'Item 2', 'Item 3']} leftTitle="Disabled" right={['Item 4']} rightTitle="Disabled" />
          </StoryVariation>

          <StoryVariation label="Mixed Content">
            <TransferList
              left={['Text Item', 'Another Text Item', 'Third Item']}
              leftTitle="Text Options"
              right={['Selected Text Item', 'Another Selected']}
              rightTitle="Selected Text"
            />
          </StoryVariation>

          <StoryVariation label="Equal Distribution">
            <TransferList left={['Left 1', 'Left 2', 'Left 3']} leftTitle="Left Side" right={['Right 1', 'Right 2', 'Right 3']} rightTitle="Right Side" />
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
