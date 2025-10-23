/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { defaultData, largerDataset, largerDatasetWith18Keys, percentageData } from './mocks';

import { AreaChart, AreaChartProps } from '.';

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
  title: 'Molecules / Charts / AreaChart',
} as Meta<AreaChartProps>;

export const Default: StoryObj<AreaChartProps> = {};

export const WithMoreThanOneArea: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A', 'B'],
    areaProps: { fillOpacity: 0.6 },
    data: largerDatasetWith18Keys,
  },
};

export const WithLargeDataSet: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    areaProps: { fillOpacity: 0.6 },
    data: largerDatasetWith18Keys,
  },
};

export const CustomColors: StoryObj<AreaChartProps> = {
  args: {
    areaKeys: ['A', 'B'],
    areaProps: { fillOpacity: 0.6 },
    colors: ['#FF0000', '#00FF00'],
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
              <Typography variant="body2">Anything you want can be displayed here.</Typography>
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
    colors: ['#225479'],
    data: percentageData,
    xLabel: 'Percentage Graph',
    yAxisProps: { tickFormatter: v => `${v * 100}%` },
    yReferenceValue: 1,
  },
};
