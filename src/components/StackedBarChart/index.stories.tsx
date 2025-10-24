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

import { defaultBarKeys, defaultData, longBarKeys, longLabelData, longSubLabelData } from './mocks';

import { StackedBarChart, StackedBarChartProps } from '.';

export default {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
  },
  component: StackedBarChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Charts / StackedBarChart',
} as Meta<StackedBarChartProps>;

type Story = StoryObj<StackedBarChartProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      barChartProps: {},
      barKeys: {},
      barProps: {},
      children: {},
      colors: {},
      data: {},
      labelListProps: {},
      subLabelProps: {},
    },
    StackedBarChart,
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
    stories[theme] = createThemeStory<StackedBarChartProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Stacked Bar Chart">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={defaultBarKeys} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Colors">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={defaultBarKeys} colors={['#FF0000', '#00FF00', '#0000FF']} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Sublabels">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={defaultBarKeys} data={defaultData} subLabels={['2019 test', '2020 test', '2021 test']} />
            </div>
          </StoryVariation>

          <StoryVariation label="Hiding Bar Label Value">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart
                barChartProps={{ subLabelWidth: 130 }}
                barKeys={defaultBarKeys}
                data={[
                  {
                    '2019': 15500,
                    '2019a': 250,
                    '2019b': 250,
                    '2020': 250,
                    '2020a': 300,
                    '2020b': 600,
                    '2021': 600,
                    '2021a': 300,
                    '2021b': 0,
                    name: 'Community College of Allegheny County Boyce Campus',
                  },
                ]}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Ungrouped Stacked Bar Chart">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={[['2019', '2019a', '2019b']]} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Vertical Bar Chart">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart
                barChartProps={{
                  chartProps: { layout: 'horizontal', margin: { left: 0 } },
                  maxHeight: 'auto',
                  xAxisProps: {
                    axisLine: true,
                    dataKey: 'name',
                    dy: 10,
                    orientation: 'bottom',
                    style: {
                      fill: '#003359',
                      fontSize: '14px',
                      fontWeight: 500,
                    },
                    tickLine: false,
                    type: 'category',
                  },
                  yAxisProps: {
                    dataKey: undefined,
                    dx: 0,
                    padding: { bottom: 0, top: 0 },
                    style: {
                      fill: '#555',
                      fontSize: '10px',
                    },
                    type: 'number',
                  },
                }}
                barKeys={defaultBarKeys}
                data={defaultData}
                labelListProps={{ position: 'insideTop' }}
                subLabelProps={{ position: 'bottom' }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Long Labels">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={defaultBarKeys} data={longLabelData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Long Sublabels">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={longBarKeys} data={longSubLabelData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Bar Props">
            <div style={{ height: 400, width: '100%' }}>
              <StackedBarChart barKeys={defaultBarKeys} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Fixed Dimensions">
            <div style={{ height: 350, width: '100%' }}>
              <StackedBarChart barKeys={defaultBarKeys} data={defaultData} />
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
