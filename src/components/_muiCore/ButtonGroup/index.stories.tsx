/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactElement, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { ButtonGroup, ButtonGroupProps } from './internal';

const ButtonGroupChildren = (): ReactElement<unknown> => {
  const buttonLabels = ['One', 'Two', 'Three'];
  const [active, setActive] = useState('One');

  return (
    <>
      {buttonLabels.map(
        (buttonLabel): ReactElement<unknown> => (
          <Button
            key={buttonLabel}
            onClick={(): void => {
              setActive(buttonLabel);
            }}
            variant={active === buttonLabel ? 'contained' : 'outlined'}
          >
            {buttonLabel}
          </Button>
        ),
      )}
    </>
  );
};

/**
 * The default ButtonGroup exports
 */
export default {
  args: {
    children: <ButtonGroupChildren />,
  },
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / ButtonGroup',
} as Meta<ButtonGroup>;

type Story = StoryObj<ButtonGroupProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    children: <ButtonGroupChildren />,
    color: 'primary',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    children: <ButtonGroupChildren />,
    color: 'primary',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, ButtonGroup),
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
    stories[theme] = createThemeStory<ButtonGroupProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Primary">
            <ButtonGroup color="primary">
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Secondary">
            <ButtonGroup color="secondary">
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Error">
            <ButtonGroup color="error">
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Info">
            <ButtonGroup color="info">
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Success">
            <ButtonGroup color="success">
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Warning">
            <ButtonGroup color="warning">
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Disabled">
            <ButtonGroup disabled>
              <ButtonGroupChildren />
            </ButtonGroup>
          </StoryVariation>

          <StoryVariation label="Full Width">
            <ButtonGroup fullWidth>
              <ButtonGroupChildren />
            </ButtonGroup>
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
