/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import ExpandMoreIcon from 'mdi-material-ui/ChevronDown';
import SaveIcon from 'mdi-material-ui/ContentSave';
import DeleteIcon from 'mdi-material-ui/Delete';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Accordion, AccordionActions, AccordionDetails, AccordionProps, AccordionSummary } from './internal';

/**
 * The default Accordion exports
 */
export default {
  args: {
    children: (
      <>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </AccordionDetails>
      </>
    ),
  },
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Accordion',
} as Meta<Accordion>;

type Story = StoryObj<AccordionProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: (
      <>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Basic Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a basic accordion example. Click the expand icon to show or hide the content.</Typography>
        </AccordionDetails>
      </>
    ),
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Playground Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Use the controls below to experiment with different accordion properties.</Typography>
        </AccordionDetails>
      </>
    ),
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Accordion),
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
    stories[theme] = createThemeStory<AccordionProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Accordion">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Basic Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="Expanded by Default">
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Expanded by Default</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This accordion is expanded by default when the page loads.</Typography>
              </AccordionDetails>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <Accordion disabled>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Disabled Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This accordion is disabled and cannot be expanded.</Typography>
              </AccordionDetails>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="With Actions">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion with Actions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This accordion includes action buttons in the details section.</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button size="small">Cancel</Button>
                <Button color="primary" size="small">
                  Save
                </Button>
              </AccordionActions>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="With Custom Actions">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Custom Actions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This accordion has custom action buttons with icons.</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button size="small" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button color="primary" size="small" startIcon={<SaveIcon />}>
                  Save
                </Button>
              </AccordionActions>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="Square Variant">
            <Accordion square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Square Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This accordion uses the square variant with no rounded corners.</Typography>
              </AccordionDetails>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="No Gutters">
            <Accordion disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>No Gutters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This accordion has no gutters for a more compact appearance.</Typography>
              </AccordionDetails>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="Multiple Accordions">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>First Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Content for the first accordion.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Second Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Content for the second accordion.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Third Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Content for the third accordion.</Typography>
              </AccordionDetails>
            </Accordion>
          </StoryVariation>

          <StoryVariation label="Long Content">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion with Long Content</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Typography>
              </AccordionDetails>
            </Accordion>
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
