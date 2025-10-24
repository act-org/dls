/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Pie } from 'recharts';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { defaultData, moreOptionsData } from './mocks';
import { HighlightComponentType } from './types';

import { PieChart, PieChartProps } from '.';

export default {
  args: {
    data: defaultData,
  },
  component: PieChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Charts / PieChart',
} as Meta<PieChartProps>;

type Story = StoryObj<PieChartProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {
    data: defaultData,
  },
  parameters: {
    chromatic: { disable: true },
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {
    data: defaultData,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground(
    {
      children: {},
      data: {},
      height: {},
      legendProps: {},
      pieChartProps: {},
      pieProps: {},
      responsiveContainerProps: {},
      tooltipProps: {},
      width: {},
    },
    PieChart,
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
    stories[theme] = createThemeStory<PieChartProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Default Pie Chart">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Colors">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart colors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00']} data={defaultData} />
            </div>
          </StoryVariation>

          <StoryVariation label="With Title">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart data={defaultData} titleProps={{ title: '2021 Students as of 4/6/2021' }} />
            </div>
          </StoryVariation>

          <StoryVariation label="More Than 4 Options">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart data={moreOptionsData} />
            </div>
          </StoryVariation>

          <StoryVariation label="With Highlight">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart
                data={moreOptionsData}
                HighlightComponent={
                  (({ payload, availableViewBoxDimension }) => (
                    <Box height={availableViewBoxDimension} width={availableViewBoxDimension} zIndex={-1}>
                      <Typography fontWeight="bold">{payload.name}</Typography>
                      <Typography>{payload.description}</Typography>
                    </Box>
                  )) as HighlightComponentType
                }
              />
            </div>
          </StoryVariation>

          <StoryVariation label="Pie Within A Pie">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart data={defaultData} legendProps={{ align: 'right' }}>
                <Pie
                  data={[
                    { name: 'Group A', value: 400 },
                    { name: 'Group B', value: 300 },
                    { name: 'Group C', value: 300 },
                    { name: 'Group D', value: 200 },
                  ]}
                  dataKey="value"
                  fill="#8884d8"
                  outerRadius="70%"
                />
              </PieChart>
            </div>
          </StoryVariation>

          <StoryVariation label="Custom Tooltip">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart
                data={defaultData}
                tooltipProps={{
                  content: ({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div style={{ backgroundColor: '#FFF', border: '1px solid #ccc', padding: '8px' }}>
                          <Typography variant="body1">{`${payload[0].value}`}</Typography>
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

          <StoryVariation label="Different Pie Props">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart
                data={defaultData}
                pieProps={{
                  endAngle: 460,
                  innerRadius: 130,
                  outerRadius: 150,
                  startAngle: 100,
                }}
              />
            </div>
          </StoryVariation>

          <StoryVariation label="With Legend">
            <div style={{ height: 400, width: '100%' }}>
              <PieChart data={defaultData} legendProps={{ layout: 'horizontal' }} />
            </div>
          </StoryVariation>

          <StoryVariation label="Fixed Dimensions">
            <div style={{ height: 600, width: '100%' }}>
              <PieChart data={defaultData} height={600} pieProps={{ innerRadius: 230, outerRadius: 260 }} width={800} />
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
