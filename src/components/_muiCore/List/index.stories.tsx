/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Avatar, Collapse, IconButton } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import ExpandMoreIcon from 'mdi-material-ui/ChevronDown';
import ExpandLessIcon from 'mdi-material-ui/ChevronUp';
import DeleteIcon from 'mdi-material-ui/Delete';
import DraftsIcon from 'mdi-material-ui/FileDocumentOutline';
import InboxIcon from 'mdi-material-ui/Inbox';
import SendIcon from 'mdi-material-ui/Send';
import StarIcon from 'mdi-material-ui/Star';
import { useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListProps } from './internal';

/**
 * The default List exports
 */
export default {
  args: {},
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / List',
} as Meta<List>;

type Story = StoryObj<ListProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, List),
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
    stories[theme] = createThemeStory<ListProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default List" sx={{ p: 4 }}>
            <List>
              <ListItem>
                <ListItemText primary="Item 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Item 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
          </StoryVariation>

          <StoryVariation label="List with Icons" sx={{ p: 4 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItem>
            </List>
          </StoryVariation>

          <StoryVariation label="List with Avatars" sx={{ p: 4 }}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>A</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Alice Johnson" secondary="alice@example.com" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>B</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Bob Smith" secondary="bob@example.com" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>C</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Carol Davis" secondary="carol@example.com" />
              </ListItem>
            </List>
          </StoryVariation>

          <StoryVariation label="List with Buttons" sx={{ p: 4 }}>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItemButton>
            </List>
          </StoryVariation>

          <StoryVariation label="Dense List" sx={{ p: 4 }}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItem>
            </List>
          </StoryVariation>

          <StoryVariation label="List with Secondary Text" sx={{ p: 4 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" secondary="You have 3 unread messages" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" secondary="Important messages" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" secondary="2 unsent messages" />
              </ListItem>
            </List>
          </StoryVariation>

          <StoryVariation label="Interactive List with Actions" sx={{ p: 4 }}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItem>
            </List>
          </StoryVariation>

          <StoryVariation label="Nested List" sx={{ p: 4 }}>
            <NestedListExample />
          </StoryVariation>
        </ThemeProvider>
      ),
    });

    return stories;
  },
  {} as Record<string, Story>,
);

// Nested List Component for demonstration
const NestedListExample = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
