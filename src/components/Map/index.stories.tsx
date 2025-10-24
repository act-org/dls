/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import { FullscreenControl, GeolocateControl, Marker, ScaleControl } from 'react-map-gl/mapbox';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { defaultData } from './mocks';

import { Map, MapProps } from '.';

/**
 * The default Map exports
 */
export default {
  args: {
    data: defaultData,
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    sourceId: 'default',
  },
  component: Map,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Maps / Map',
} as Meta<MapProps>;

type Story = StoryObj<MapProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    data: defaultData,
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    sourceId: 'default',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    data: defaultData,
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    sourceId: 'default',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Map),
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
    stories[theme] = createThemeStory<MapProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Map">
            <div style={{ height: 400, width: '100%' }}>
              <Map data={defaultData} height={400} mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''} sourceId="default" width="100%" />
            </div>
          </StoryVariation>

          <StoryVariation label="With Map Props">
            <div style={{ height: 400, width: '100%' }}>
              <Map
                data={defaultData}
                height={400}
                initialViewState={{ latitude: 32.3182, longitude: -86.9023, zoom: 5.5 }}
                mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                sourceId="mapProps"
                style={{ height: 400, width: '100%' }}
                width="100%"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Navigation Controls">
            <div style={{ height: 400, width: '100%' }}>
              <Map
                data={defaultData}
                height={400}
                mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''}
                navigationControlProps={{
                  position: 'top-right',
                  showCompass: false,
                  visualizePitch: true,
                }}
                sourceId="controlProps"
                width="100%"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Other Controls">
            <div style={{ height: 400, width: '100%' }}>
              <Map data={defaultData} height={400} mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''} sourceId="otherControls" width="100%">
                <>
                  <GeolocateControl position="top-left" />
                  <FullscreenControl position="top-left" />
                  <ScaleControl />
                </>
              </Map>
            </div>
          </StoryVariation>

          <StoryVariation label="With Marker">
            <div style={{ height: 400, width: '100%' }}>
              <Map height={400} mapboxAccessToken={process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN || ''} sourceId="children" width="100%">
                <Marker color="red" latitude={37.8} longitude={-122.4} />
              </Map>
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
