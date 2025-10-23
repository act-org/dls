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

import { defaultData, LARGE_DATA } from './mocks';

import { ScatterPlot, ScatterPlotProps } from '.';

export default {
  args: {
    data: defaultData,
    height: 600,
    xLabelValue: 'Inquiries to Applicants',
    yAxisProps: { domain: [0, 100] },
    yLabelValue: 'Inquiries',
  },
  component: ScatterPlot,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Molecules / Charts / ScatterPlot',
} as Meta<ScatterPlotProps>;

type Story = StoryObj<ScatterPlotProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    data: defaultData,
    height: 600,
    xLabelValue: 'Inquiries to Applicants',
    yAxisProps: { domain: [0, 100] },
    yLabelValue: 'Inquiries',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    data: defaultData,
    height: 600,
    xLabelValue: 'Inquiries to Applicants',
    yAxisProps: { domain: [0, 100] },
    yLabelValue: 'Inquiries',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      cartesianGridProps: {},
      chartProps: {},
      children: {},
      data: {},
      height: {},
      responsiveContainerProps: {},
      scatterProps: {},
      selectedPoint: {},
      setSelectedPoint: {},
      tooltipProps: {},
      xAverageLineProps: {},
      xAxisProps: {},
      xLabelProps: {},
      xLabelValue: {},
      yAverageLineProps: {},
      yAxisProps: {},
      yLabelProps: {},
      yLabelValue: {},
      zAxisProps: {},
    },
    ScatterPlot,
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
    stories[theme] = createThemeStory<ScatterPlotProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Scatter Plot">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot data={defaultData} height={600} xLabelValue="Inquiries to Applicants" yAxisProps={{ domain: [0, 100] }} yLabelValue="Inquiries" />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Color">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot
                color="red"
                data={defaultData}
                height={600}
                xLabelValue="Inquiries to Applicants"
                yAxisProps={{ domain: [0, 100] }}
                yLabelValue="Inquiries"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Large Dataset">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot data={LARGE_DATA} height={600} xLabelValue="X Value" yAxisProps={{ domain: [0, 100] }} yLabelValue="Y Value" />
            </div>
          </StoryVariation>

          <StoryVariation label="Without Rank Summary">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot
                data={LARGE_DATA}
                height={600}
                hideSummary
                xLabelValue="Inquiries to Applicants"
                yAxisProps={{ domain: [0, 100] }}
                yLabelValue="Inquiries"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Grid">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot
                cartesianGridProps={{ strokeDasharray: '3 3' }}
                data={defaultData}
                height={600}
                xLabelValue="Inquiries to Applicants"
                yAxisProps={{ domain: [0, 100] }}
                yLabelValue="Inquiries"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Scatter Props">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot
                data={defaultData}
                height={600}
                scatterProps={{ r: 8, strokeWidth: 2 }}
                xLabelValue="Inquiries to Applicants"
                yAxisProps={{ domain: [0, 100] }}
                yLabelValue="Inquiries"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Average Lines">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot
                data={defaultData}
                height={600}
                xAverageLineProps={{ stroke: 'red', strokeDasharray: '5 5' }}
                xLabelValue="Inquiries to Applicants"
                yAxisProps={{ domain: [0, 100] }}
                yAverageLineProps={{ stroke: 'blue', strokeDasharray: '5 5' }}
                yLabelValue="Inquiries"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Fixed Dimensions">
            <div style={{ height: 500, width: '100%' }}>
              <ScatterPlot data={defaultData} height={450} xLabelValue="Inquiries to Applicants" yAxisProps={{ domain: [0, 100] }} yLabelValue="Inquiries" />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Axis Props">
            <div style={{ height: 600, width: '100%' }}>
              <ScatterPlot
                data={defaultData}
                height={600}
                xAxisProps={{
                  axisLine: true,
                  tickLine: true,
                }}
                xLabelValue="Inquiries to Applicants"
                yAxisProps={{
                  domain: [0, 100],
                  axisLine: true,
                  tickLine: true,
                }}
                yLabelValue="Inquiries"
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
