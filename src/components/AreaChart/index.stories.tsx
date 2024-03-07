/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import { AreaChart, AreaChartProps } from '.';

const percentageData = [
  {
    A: 0.2,
    name: 'Day 1',
  },
  {
    A: 0.6,
    name: 'Day 2',
  },
  {
    A: 0.35,
    name: 'Day 3',
  },
  {
    A: 0.34,
    name: 'Day 4',
  },
  {
    A: 0.82,
    name: 'Day 5',
  },
  {
    A: 0.2,
    name: 'Day 6',
  },
  {
    A: 1,
    name: 'Day 7',
  },
];

const defaultData = [
  {
    A: 7,
    name: 'Day 1',
  },
  {
    A: 15,
    name: 'Day 2',
  },
  {
    A: 18,
    name: 'Day 3',
  },
  {
    A: 12,
    name: 'Day 4',
  },
  {
    A: 4,
    name: 'Day 5',
  },
  {
    A: 9,
    name: 'Day 6',
  },
  {
    A: 11,
    name: 'Day 7',
  },
  {
    A: 4,
    name: 'Day 7',
  },
];

const largerDataset = [
  {
    A: 2,
    B: 8,
    name: 'Day 1',
  },
  {
    A: 5,
    B: 17,
    name: 'Day 2',
  },
  {
    A: 18,
    B: 18,
    name: 'Day 3',
  },
  {
    A: 4,
    B: 24,
    name: 'Day 4',
  },
  {
    A: 22,
    B: 6,
    name: 'Day 5',
  },
  {
    A: 15,
    B: 4,
    name: 'Day 6',
  },
];

export default {
  args: {
    areaKeys: ['A'],
    data: defaultData,
  },
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
  component: AreaChart,
  tags: ['autodocs'],
  title: 'Molecules / AreaChart',
} as Meta<AreaChartProps>;

export const WithMoreThanOneArea: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A', 'B'],
    areaProps: { fillOpacity: 0.6 },
    data: largerDataset,
  },
};

export const CustomColors: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A', 'B'],
    areaProps: { fillOpacity: 0.6 },
    colors: { A: 'red', B: 'pink' },
    data: largerDataset,
  },
};

export const WithXLabel: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    xLabel: 'My incredible sample graph',
  },
};

export const WithCustomXLabel: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    xLabel: 'My incredible sample graph',
    xLabelProps: { offset: -200, position: 'left' },
  },
};

export const WithYLabel: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    yLabel: 'Vertical Text',
  },
};

export const WithCustomYLabel: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    yLabel: 'Vertical Text',
    yLabelProps: { angle: 90, position: 'right' },
  },
};

export const WithLegend: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    showLegend: true,
  },
};

export const WithYReferenceLine: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    yReferenceValue: 18,
  },
};

export const WithoutTooltip: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    tooltipProps: {
      cursor: false,
      wrapperStyle: {
        visibility: 'hidden',
      },
    },
  },
};

export const WithCustomTooltip: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    tooltipProps: {
      content: ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div style={{ backgroundColor: '#FFF' }}>
              <Typography variant="body1">{`${label} : ${payload[0].value}`}</Typography>
              <Typography variant="body2">
                Anything you want can be displayed here.
              </Typography>
            </div>
          );
        }
        return null;
      },
    },
  },
};

export const WithoutScroll: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    height: 1000,
  },
};

export const WithFixedHeightAndWidth: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    data: defaultData,
    height: 350,
    width: 600,
  },
};

export const MoreRealisticExample: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A'],
    colors: { A: '#225479' },
    data: percentageData,
    xLabel: 'Percentage Graph',
    yAxisProps: { tickFormatter: v => `${v * 100}%` },
    yReferenceValue: 1,
  },
};
