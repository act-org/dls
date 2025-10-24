/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Scatter } from 'recharts';
import { ScatterCustomizedShape } from 'recharts/types/cartesian/Scatter';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { defaultBarKeys, defaultBarKeysFourLines, defaultData, defaultDataFourLines, longLabelData } from './mocks';

import { BarChart, BarChartProps } from '.';

export default {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    description: 'A bar chart displaying the volumes per US state in 2019, 2020, and 2021',
    title: 'Volumes for US States',
  },
  component: BarChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Charts / BarChart',
} as Meta<BarChartProps>;

type Story = StoryObj<BarChartProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    description: 'A bar chart displaying the volumes per US state in 2019, 2020, and 2021',
    title: 'Volumes for US States',
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
    description: 'A bar chart displaying the volumes per US state in 2019, 2020, and 2021',
    title: 'Volumes for US States',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      barKeys: {},
      barProps: {},
      cartesianGridProps: {},
      chartProps: {},
      children: {},
      colors: {},
      data: {},
      height: {},
      labelListProps: {},
      maxHeight: {},
      responsiveContainerProps: {},
      subLabelProps: {},
      tooltipProps: {},
      width: {},
      xAxisProps: {},
      yAxisProps: {},
    },
    BarChart,
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
    stories[theme] = createThemeStory<BarChartProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Bar Chart">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart
                barKeys={defaultBarKeys}
                data={defaultData}
                description="A bar chart displaying the volumes per US state in 2019, 2020, and 2021"
                title="Volumes for US States"
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Colors">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart barKeys={defaultBarKeys} colors={['red', 'green', 'blue']} data={defaultData} title="Custom Colors" />
            </div>
          </StoryVariation>

          <StoryVariation label="Four Lines">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart barKeys={defaultBarKeysFourLines} data={defaultDataFourLines} title="Four Lines Chart" />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Tooltip">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart
                barKeys={defaultBarKeys}
                data={defaultData}
                title="Custom Tooltip"
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

          <StoryVariation label="Vertical Bar Chart">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart
                barKeys={defaultBarKeys}
                chartProps={{ layout: 'horizontal', margin: { left: 0 } }}
                data={defaultData}
                labelListProps={{ position: 'top' }}
                maxHeight="auto"
                subLabelProps={{ position: 'bottom' }}
                title="Vertical Bar Chart"
                xAxisProps={{
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
                }}
                yAxisProps={{
                  dataKey: undefined,
                  dx: 0,
                  padding: { bottom: 0, top: 0 },
                  style: {
                    fill: '#555',
                    fontSize: '10px',
                  },
                  tick: undefined,
                  type: 'number',
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Thin Bars">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart barKeys={defaultBarKeys} chartProps={{ barSize: 10 }} data={defaultData} title="Thin Bars" />
            </div>
          </StoryVariation>

          <StoryVariation label="With Scatter">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart
                barKeys={defaultBarKeys}
                data={defaultData}
                title="With Scatter Points"
                tooltipProps={{
                  renderAdditionalInfo: (barId, payload) => {
                    const scatterInfo = payload.find(el => el.dataKey === `${barId}scatter`);

                    if (!scatterInfo) {
                      return null;
                    }

                    return <div>Scatter: {scatterInfo.value}</div>;
                  },
                }}
              >
                <>
                  <Scatter
                    dataKey="2019scatter"
                    fill="red"
                    shape={
                      (({ fill, height, width, x, cy }: { fill: string; height: number; width: number; x: number; cy: number }) => (
                        <g>
                          <circle cx={x + width / 2} cy={Math.floor(cy - height / 2 - height * 2)} fill={fill} r={height} />
                        </g>
                      )) as ScatterCustomizedShape
                    }
                  />
                  <Scatter
                    dataKey="2020scatter"
                    fill="red"
                    shape={
                      (({ fill, height, width, x, y }: { fill: string; height: number; width: number; x: number; y: number }) => (
                        <g>
                          <circle cx={x + width / 2} cy={y + height / 2} fill={fill} r={height} />
                        </g>
                      )) as ScatterCustomizedShape
                    }
                  />
                  <Scatter
                    dataKey="2021scatter"
                    fill="red"
                    shape={
                      (({ fill, height, width, x, cy }: { fill: string; height: number; width: number; x: number; cy: number }) => (
                        <g>
                          <circle cx={x + width / 2} cy={cy + height / 2 + height * 2} fill={fill} r={height} />
                        </g>
                      )) as ScatterCustomizedShape
                    }
                  />
                </>
              </BarChart>
            </div>
          </StoryVariation>

          <StoryVariation label="Fixed Dimensions">
            <div style={{ height: 350, width: '100%' }}>
              <BarChart barKeys={defaultBarKeys} data={defaultData} height={300} title="Fixed Dimensions" width={600} />
            </div>
          </StoryVariation>

          <StoryVariation label="Long Labels">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart barKeys={defaultBarKeys} data={longLabelData} title="Long Labels" />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Axis">
            <div style={{ height: 400, width: '100%' }}>
              <BarChart
                barKeys={defaultBarKeys}
                data={defaultData}
                title="Custom Axis"
                xAxisProps={{
                  axisLine: true,
                  orientation: 'bottom',
                  tickLine: true,
                }}
                yAxisProps={{
                  axisLine: false,
                  dx: 0,
                  orientation: 'right',
                  tick: undefined,
                  tickLine: false,
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
