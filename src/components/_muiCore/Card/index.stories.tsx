/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Avatar, Button, IconButton, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import MoreVertIcon from 'mdi-material-ui/DotsVertical';
import FavoriteIcon from 'mdi-material-ui/Heart';
import ShareIcon from 'mdi-material-ui/Share';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, CardProps } from './internal';

/**
 * The default Card exports
 */
export default {
  args: {},
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Card',
} as Meta<Card>;

type Story = StoryObj<CardProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: args => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography color="textSecondary" component="div" gutterBottom variant="h5">
          Word of the Day
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          &ldquo;a benevolent smile&rdquo;
        </Typography>
      </CardContent>
    </Card>
  ),
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Card),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: args => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography color="textSecondary" component="div" gutterBottom variant="h5">
          Playground Card
        </Typography>
        <Typography variant="body2">This is a playground card where you can experiment with different props and see how they affect the component.</Typography>
      </CardContent>
    </Card>
  ),
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<CardProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Card" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography color="textSecondary" component="div" gutterBottom variant="h5">
                  Word of the Day
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  &ldquo;a benevolent smile&rdquo;
                </Typography>
              </CardContent>
            </Card>
          </StoryVariation>

          <StoryVariation label="Card with Header" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" sx={{ bgcolor: 'primary.main' }}>
                    R
                  </Avatar>
                }
                subheader="September 14, 2016"
                title="Shrimp and Chorizo Paella"
              />
              <CardContent>
                <Typography color="text.secondary" variant="body2">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                </Typography>
              </CardContent>
            </Card>
          </StoryVariation>

          <StoryVariation label="Card with Media" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia alt="green iguana" component="img" height="140" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
              <CardContent>
                <Typography component="div" gutterBottom variant="h5">
                  Lizard
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
            </Card>
          </StoryVariation>

          <StoryVariation label="Card with Actions" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography component="div" gutterBottom variant="h5">
                  Nature
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Nature is a great source of inspiration and beauty. It provides us with fresh air, clean water, and countless opportunities for adventure.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
          </StoryVariation>

          <StoryVariation label="Outlined Card" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardContent>
                <Typography color="textSecondary" component="div" gutterBottom variant="h5">
                  Outlined Card
                </Typography>
                <Typography variant="body2">This card has an outlined border instead of a filled background.</Typography>
              </CardContent>
            </Card>
          </StoryVariation>

          <StoryVariation label="Elevated Card" sx={{ p: 4 }}>
            <Card sx={{ boxShadow: 3, maxWidth: 345 }}>
              <CardContent>
                <Typography color="textSecondary" component="div" gutterBottom variant="h5">
                  Elevated Card
                </Typography>
                <Typography variant="body2">This card has increased elevation to emphasize its importance.</Typography>
              </CardContent>
            </Card>
          </StoryVariation>

          <StoryVariation label="Interactive Card" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia alt="green iguana" component="img" height="140" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
                <CardContent>
                  <Typography component="div" gutterBottom variant="h5">
                    Clickable Card
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    This entire card is clickable and responds to user interactions.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </StoryVariation>

          <StoryVariation label="Complex Layout Card" sx={{ p: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" sx={{ bgcolor: 'secondary.main' }}>
                    M
                  </Avatar>
                }
                subheader="React component library"
                title="Material-UI"
              />
              <CardMedia alt="Material-UI" component="img" height="140" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
              <CardContent>
                <Typography color="text.secondary" variant="body2">
                  Material-UI provides a robust, customizable, and accessible library of foundational and advanced components.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
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
