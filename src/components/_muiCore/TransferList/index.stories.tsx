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
}: TransferListProps) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [leftChecked, setLeftChecked] = useState<string[]>([]);
  const [rightChecked, setRightChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedLeft = () => {
    setLeftChecked([]);
    setChecked([]);
    onMoveRight?.(leftChecked);
  };

  const handleCheckedRight = () => {
    setRightChecked([]);
    setChecked([]);
    onMoveLeft?.(rightChecked);
  };

  const handleAllLeft = () => {
    setLeftChecked([]);
    setRightChecked([]);
    setChecked([]);
    onMoveAllLeft?.();
  };

  const handleAllRight = () => {
    setLeftChecked([]);
    setRightChecked([]);
    setChecked([]);
    onMoveAllRight?.();
  };

  const customList = (items: readonly string[], title: string) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <ListSubheader>
        <Typography variant="subtitle1">{title}</Typography>
      </ListSubheader>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton role="listitem" onClick={handleToggle(value)} disabled={disabled} selected={checked.indexOf(value) !== -1}>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {customList(left, leftTitle)}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <IconButton onClick={handleCheckedRight} disabled={leftChecked.length === 0 || disabled} size="small">
            <ChevronRightIcon />
          </IconButton>
          <IconButton onClick={handleCheckedLeft} disabled={rightChecked.length === 0 || disabled} size="small">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={handleAllRight} disabled={left.length === 0 || disabled} size="small">
            <ChevronDoubleRightIcon />
          </IconButton>
          <IconButton onClick={handleAllLeft} disabled={right.length === 0 || disabled} size="small">
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
    right: ['Item 6', 'Item 7'],
    leftTitle: 'Available',
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
    right: ['Option E'],
    leftTitle: 'Available Options',
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
    right: ['Choice 4'],
    leftTitle: 'Choices',
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
              right={['Item 6', 'Item 7']}
              leftTitle="Available Items"
              rightTitle="Selected Items"
            />
          </StoryVariation>

          <StoryVariation label="Empty Lists">
            <TransferList left={[]} right={[]} leftTitle="Empty Left" rightTitle="Empty Right" />
          </StoryVariation>

          <StoryVariation label="All Items Selected">
            <TransferList left={[]} right={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} leftTitle="Available" rightTitle="All Selected" />
          </StoryVariation>

          <StoryVariation label="Single Item Lists">
            <TransferList left={['Only Item']} right={[]} leftTitle="Single Item" rightTitle="Empty" />
          </StoryVariation>

          <StoryVariation label="Long Item Names">
            <TransferList
              left={['Very Long Item Name That Might Wrap', 'Another Extremely Long Item Name', 'Short', 'Medium Length Item Name']}
              right={['Selected Long Item']}
              leftTitle="Long Names"
              rightTitle="Selected"
            />
          </StoryVariation>

          <StoryVariation label="Many Items">
            <TransferList
              left={Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)}
              right={['Selected 1', 'Selected 2']}
              leftTitle="Many Available"
              rightTitle="Few Selected"
            />
          </StoryVariation>

          <StoryVariation label="Custom Titles">
            <TransferList left={['Option A', 'Option B', 'Option C']} right={['Option D']} leftTitle="Source Options" rightTitle="Target Options" />
          </StoryVariation>

          <StoryVariation label="Disabled State">
            <TransferList left={['Item 1', 'Item 2', 'Item 3']} right={['Item 4']} leftTitle="Disabled" rightTitle="Disabled" disabled />
          </StoryVariation>

          <StoryVariation label="Mixed Content">
            <TransferList
              left={['Text Item', 'Another Text Item', 'Third Item']}
              right={['Selected Text Item', 'Another Selected']}
              leftTitle="Text Options"
              rightTitle="Selected Text"
            />
          </StoryVariation>

          <StoryVariation label="Equal Distribution">
            <TransferList left={['Left 1', 'Left 2', 'Left 3']} right={['Right 1', 'Right 2', 'Right 3']} leftTitle="Left Side" rightTitle="Right Side" />
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
