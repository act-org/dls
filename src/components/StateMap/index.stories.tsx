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

import { defaultData, defaultProcessDataFn } from './mocks';

import { StateMap, StateMapProps } from '.';

/**
 * The default StateMap exports
 */
export default {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/states.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  component: StateMap,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Maps / StateMap',
} as Meta<StateMapProps>;

type Story = StoryObj<StateMapProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/states.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/states.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, StateMap),
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
    stories[theme] = createThemeStory<StateMapProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default State Map">
            <div style={{ height: 400, width: '100%' }}>
              <StateMap
                data={defaultData}
                geoJSONPath="maps/states.json"
                mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''}
                processDataFn={defaultProcessDataFn}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Color">
            <div style={{ height: 400, width: '100%' }}>
              <StateMap
                data={defaultData}
                geoJSONPath="maps/states.json"
                mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''}
                mapProps={{ color: '#FF0000' }}
                processDataFn={defaultProcessDataFn}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Selected State">
            <div style={{ height: 400, width: '100%' }}>
              <StateMap
                data={defaultData}
                geoJSONPath="maps/states.json"
                mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''}
                processDataFn={defaultProcessDataFn}
                selectedState={['48']}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Multiple Selected States">
            <div style={{ height: 400, width: '100%' }}>
              <StateMap
                data={defaultData}
                geoJSONPath="maps/states.json"
                mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''}
                processDataFn={defaultProcessDataFn}
                selectedState={['48', '40']}
              />
            </div>
          </StoryVariation>
        </ThemeProvider>
      ),
    });

    return stories;
  },
  {} as Record<string, Story>,
);

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura', parameters: { chromatic: { delay: 1500 } } };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic', parameters: { chromatic: { delay: 1500 } } };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage', parameters: { chromatic: { delay: 1500 } } };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E', parameters: { chromatic: { delay: 1500 } } };
