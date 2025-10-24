/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/require-default-props */

import { Button, Grid } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import startCase from 'lodash/startCase';
import { VariantType } from 'notistack';
import { FC, ReactElement, useState } from 'react';

import Alert from '~/components/Alert';
import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import AlertContext from '~/context/AlertContext';
import AlertContextProvider, { AlertContextProviderProps } from '~/context/AlertContext/provider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { SnackbarAlert } from '.';

const Template: StoryFn<AlertContextProviderProps> = (props: AlertContextProviderProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <AlertContextProvider {...props}>
      <AlertContext.Consumer>
        {({ actions }): ReactElement<unknown> => (
          <Grid container spacing={2}>
            {(['error', 'info', 'warning', 'success'] as VariantType[]).map(
              (variant): ReactElement<unknown> => (
                <Grid key={variant}>
                  <Button
                    onClick={async (): Promise<void> => {
                      const newCounter = counter + 1;

                      setCounter(newCounter);

                      await actions.addAlert({
                        message: (
                          <span>
                            Alert number {newCounter} with&nbsp;
                            <b>
                              <i>
                                <u>html content</u>
                              </i>
                            </b>
                            .
                          </span>
                        ),
                        options: {
                          variant,
                        },
                      });
                    }}
                  >
                    {`Show ${startCase(variant)}`}
                  </Button>
                </Grid>
              ),
            )}
          </Grid>
        )}
      </AlertContext.Consumer>
    </AlertContextProvider>
  );
};

/**
 * The `<SnackbarAlert />` component is used to animate the `<Alert />` component
 * on and off the screen.
 */
export default {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      anchorOriginHorizontal: { type: 'string' },
      anchorOriginVertical: { type: 'string' },
      maxSnack: { type: 'number' },
    },
    SnackbarAlert,
  ),
  component: AlertContextProvider,
  parameters: {
    layout: 'padded',
  },
  render: Template,
  tags: ['autodocs'],
  title: 'Molecules / SnackbarAlert',
} as Meta<AlertContextProviderProps>;

type Story = StoryObj<AlertContextProviderProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: Template,
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      anchorOriginHorizontal: { type: 'string' },
      anchorOriginVertical: { type: 'string' },
      maxSnack: { type: 'number' },
    },
    SnackbarAlert,
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
const ThemeStoryComponent: FC<Partial<AlertContextProviderProps>> = props => {
  const [counter, setCounter] = useState(0);

  return (
    <AlertContextProvider {...props}>
      <AlertContext.Consumer>
        {({ actions }): ReactElement<unknown> => (
          <Grid container spacing={2}>
            {(['error', 'info', 'warning', 'success'] as VariantType[]).map(
              (variant): ReactElement<unknown> => (
                <Grid key={variant}>
                  <Button
                    onClick={async (): Promise<void> => {
                      const newCounter = counter + 1;

                      setCounter(newCounter);

                      await actions.addAlert({
                        message: (
                          <span>
                            Alert number {newCounter} with&nbsp;
                            <b>
                              <i>
                                <u>html content</u>
                              </i>
                            </b>
                            .
                          </span>
                        ),
                        options: {
                          variant,
                        },
                      });
                    }}
                  >
                    {`Show ${startCase(variant)}`}
                  </Button>
                </Grid>
              ),
            )}
          </Grid>
        )}
      </AlertContext.Consumer>
    </AlertContextProvider>
  );
};

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<AlertContextProviderProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default">
            <ThemeStoryComponent>
              <div>Default SnackbarAlert</div>
            </ThemeStoryComponent>
          </StoryVariation>

          <StoryVariation label="Custom Max Snack">
            <ThemeStoryComponent maxSnack={5}>
              <div>Custom Max Snack</div>
            </ThemeStoryComponent>
          </StoryVariation>

          <StoryVariation label="Custom Anchor Origin">
            <ThemeStoryComponent anchorOriginHorizontal="right" anchorOriginVertical="top">
              <div>Custom Anchor Origin</div>
            </ThemeStoryComponent>
          </StoryVariation>

          <StoryVariation label="Custom Snackbar Props">
            <ThemeStoryComponent
              autoHideDuration={10_000}
              classes={{
                containerRoot: 'notistackContainerClass',
              }}
              Components={{
                default: alertProps => (
                  <Alert
                    {...alertProps}
                    style={{
                      backgroundColor: 'purple',
                    }}
                  />
                ),
                error: alertProps => (
                  <Alert
                    {...alertProps}
                    style={{
                      backgroundColor: 'purple',
                    }}
                  />
                ),
                info: alertProps => (
                  <Alert
                    {...alertProps}
                    style={{
                      backgroundColor: 'purple',
                    }}
                  />
                ),
                success: alertProps => (
                  <Alert
                    {...alertProps}
                    style={{
                      backgroundColor: 'purple',
                    }}
                  />
                ),
                warning: alertProps => (
                  <Alert
                    {...alertProps}
                    style={{
                      backgroundColor: 'purple',
                    }}
                  />
                ),
              }}
            >
              <div>Custom Snackbar Props</div>
            </ThemeStoryComponent>
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
