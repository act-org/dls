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

import { defaultData, edgeCaseCloseData, edgeCaseLowData, edgeCaseNoData, threeBarsData } from './mocks';

import { OverlappedBarChart, OverlappedBarChartProps } from '.';

export default {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: defaultData,
  },
  component: OverlappedBarChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Charts / OverlappedBarChart',
} as Meta<OverlappedBarChartProps>;

type Story = StoryObj<OverlappedBarChartProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: defaultData,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: defaultData,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, OverlappedBarChart),
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
    stories[theme] = createThemeStory<OverlappedBarChartProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Overlapped Bar Chart">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Colors">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} colors={['#FF0000', '#00FF00', '#0000FF']} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Three Bars">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'test', 'applicants']} data={threeBarsData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Close Data">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={edgeCaseCloseData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Inner Bar Text Color">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={edgeCaseCloseData} innerBarTextColor="red" />
            </div>
          </StoryVariation>

          <StoryVariation label="Low Data">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={edgeCaseLowData} />
            </div>
          </StoryVariation>

          <StoryVariation label="No Data">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={edgeCaseNoData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Different Bar Sizes">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart
                barChartProps={{
                  xAxisProps: {
                    axisLine: true,
                    dataKey: 'name',
                    hide: false,
                    orientation: 'bottom',
                    type: 'category',
                  },
                  yAxisProps: {
                    dataKey: undefined,
                    dx: 0,
                    hide: false,
                    padding: { bottom: 0, top: 0 },
                    type: 'number',
                  },
                }}
                barKeys={['inquiries', 'applicants']}
                data={defaultData}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Label Props">
            <div style={{ height: 400, width: '100%' }}>
              <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={defaultData} labelProps={{ position: 'top' }} />
            </div>
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
