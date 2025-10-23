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

import { DATA, defaultLineKeys, processDataFn, yAxisDataKey } from './mocks';

import { LineChart, LineChartProps } from '.';

export default {
  args: {
    data: processDataFn(DATA),
    height: 450,
    lineKeys: defaultLineKeys,
    maxHeight: 450,
    width: 65 + 56 * DATA.length,
    yAxisProps: {
      dataKey: yAxisDataKey(),
      label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
    },
  },
  component: LineChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Charts / LineChart',
} as Meta<LineChartProps>;

type Story = StoryObj<LineChartProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    data: processDataFn(DATA),
    height: 450,
    lineKeys: defaultLineKeys,
    maxHeight: 450,
    width: 65 + 56 * DATA.length,
    yAxisProps: {
      dataKey: yAxisDataKey(),
      label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
    },
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    data: processDataFn(DATA),
    height: 450,
    lineKeys: defaultLineKeys,
    maxHeight: 450,
    width: 65 + 56 * DATA.length,
    yAxisProps: {
      dataKey: yAxisDataKey(),
      label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      cartesianGridProps: {},
      chartProps: {},
      children: {},
      containerStyles: {},
      data: {},
      height: {},
      labelProps: {},
      lineProps: {},
      maxHeight: {},
      responsiveContainerProps: {},
      width: {},
      xAxisProps: {},
      yAxisProps: {},
    },
    LineChart,
  ),
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
    stories[theme] = createThemeStory<LineChartProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Line Chart">
            <div style={{ height: 450, width: '100%' }}>
              <LineChart
                data={processDataFn(DATA)}
                height={450}
                lineKeys={defaultLineKeys}
                maxHeight={450}
                width={65 + 56 * DATA.length}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Line Colors">
            <div style={{ height: 450, width: '100%' }}>
              <LineChart
                colors={['#FF0000', '#00FF00', '#0000FF']}
                data={processDataFn(DATA)}
                height={450}
                lineKeys={defaultLineKeys}
                maxHeight={450}
                width={65 + 56 * DATA.length}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Grid">
            <div style={{ height: 450, width: '100%' }}>
              <LineChart
                cartesianGridProps={{ strokeDasharray: '3 3' }}
                data={processDataFn(DATA)}
                height={450}
                lineKeys={defaultLineKeys}
                maxHeight={450}
                width={65 + 56 * DATA.length}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Line Props">
            <div style={{ height: 450, width: '100%' }}>
              <LineChart
                data={processDataFn(DATA)}
                height={450}
                lineKeys={defaultLineKeys}
                lineProps={{ strokeWidth: 3, strokeDasharray: '5 5' }}
                maxHeight={450}
                width={65 + 56 * DATA.length}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Fixed Dimensions">
            <div style={{ height: 400, width: '100%' }}>
              <LineChart
                data={processDataFn(DATA)}
                height={350}
                lineKeys={defaultLineKeys}
                maxHeight={350}
                width={600}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom X Axis">
            <div style={{ height: 450, width: '100%' }}>
              <LineChart
                data={processDataFn(DATA)}
                height={450}
                lineKeys={defaultLineKeys}
                maxHeight={450}
                width={65 + 56 * DATA.length}
                xAxisProps={{
                  axisLine: true,
                  tickLine: true,
                }}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Y Axis">
            <div style={{ height: 450, width: '100%' }}>
              <LineChart
                data={processDataFn(DATA)}
                height={450}
                lineKeys={defaultLineKeys}
                maxHeight={450}
                width={65 + 56 * DATA.length}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                  axisLine: true,
                  tickLine: true,
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Responsive Container">
            <div style={{ height: 400, width: '100%' }}>
              <LineChart
                data={processDataFn(DATA)}
                height={400}
                lineKeys={defaultLineKeys}
                maxHeight={400}
                yAxisProps={{
                  dataKey: yAxisDataKey(),
                  label: { angle: -90, position: 'insideLeft', value: 'Student Count' },
                }}
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

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
