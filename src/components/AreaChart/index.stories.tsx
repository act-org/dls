/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { defaultData, largerDataset, largerDatasetWith18Keys, percentageData } from './mocks';

import { AreaChart, AreaChartProps } from '.';

export default {
  args: {
    areaKeys: ['A'],
    data: defaultData,
  },
  component: AreaChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Charts / AreaChart',
} as Meta<AreaChartProps>;

type Story = StoryObj<AreaChartProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    xLabel: 'Sample Area Chart',
    yLabel: 'Values',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    xLabel: 'Sample Area Chart',
    yLabel: 'Values',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      areaChartProps: {},
      areaKeys: {},
      areaProps: {},
      colors: {},
      data: {},
      height: {},
      legendProps: {},
      responsiveContainerProps: {},
      showLegend: {},
      tooltipProps: {},
      width: {},
      xAxisProps: {},
      xLabel: {},
      xLabelProps: {},
      yAxisProps: {},
      yLabel: {},
      yLabelProps: {},
      yReferenceValue: {},
    },
    AreaChart,
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
    stories[theme] = createThemeStory<AreaChartProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Area Chart">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A']} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Multiple Areas">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A', 'B']} areaProps={{ fillOpacity: 0.6 }} data={largerDatasetWith18Keys} />
            </div>
          </StoryVariation>

          <StoryVariation label="With Labels">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A']} data={defaultData} xLabel="Sample Data" yLabel="Values" />
            </div>
          </StoryVariation>

          <StoryVariation label="With Legend">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A', 'B']} data={largerDataset} showLegend />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Colors">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A', 'B']} areaProps={{ fillOpacity: 0.6 }} colors={['#FF0000', '#00FF00']} data={largerDataset} />
            </div>
          </StoryVariation>

          <StoryVariation label="With Reference Line">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A']} data={defaultData} yReferenceValue={18} />
            </div>
          </StoryVariation>

          <StoryVariation label="Large Dataset">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart areaKeys={['A', 'B', 'C', 'D', 'E', 'F']} areaProps={{ fillOpacity: 0.6 }} data={largerDatasetWith18Keys} />
            </div>
          </StoryVariation>

          <StoryVariation label="Percentage Data">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart
                areaKeys={['A']}
                colors={['#225479']}
                data={percentageData}
                xLabel="Percentage Graph"
                yAxisProps={{ tickFormatter: v => `${v * 100}%` }}
                yReferenceValue={1}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Tooltip">
            <div style={{ height: 300, width: '100%' }}>
              <AreaChart
                areaKeys={['A']}
                data={defaultData}
                tooltipProps={{
                  content: ({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div style={{ backgroundColor: '#FFF', border: '1px solid #ccc', padding: '8px' }}>
                          <Typography variant="body1">{`${label} : ${payload[0].value}`}</Typography>
                          <Typography variant="body2">Custom tooltip content</Typography>
                        </div>
                      );
                    }
                    return null;
                  },
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Fixed Dimensions">
            <div style={{ height: 250, width: '100%' }}>
              <AreaChart areaKeys={['A']} data={defaultData} height={200} width={400} />
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
