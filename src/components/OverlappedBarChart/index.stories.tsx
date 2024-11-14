/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import {
  defaultData,
  edgeCaseCloseData,
  edgeCaseLowData,
  edgeCaseNoData,
  threeBarsData,
} from './mocks';

import { OverlappedBarChart, OverlappedBarChartProps } from '.';

export default {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: defaultData,
  },
  argTypes: Playground({}, OverlappedBarChart),
  component: OverlappedBarChart,
  tags: ['autodocs'],
  title: 'Molecules / Charts / OverlappedBarChart',
} as Meta<OverlappedBarChartProps>;

export const Default: StoryObj<OverlappedBarChartProps> = {};

export const CustomBarColors: StoryObj<OverlappedBarChartProps> = {
  args: {
    colors: ['#FF0000', '#00FF00', '#0000FF'],
  },
};

export const WithThreeBars: StoryObj<OverlappedBarChartProps> = {
  args: {
    barKeys: ['inquiries', 'test', 'applicants'],
    data: threeBarsData,
  },
};

export const CloseData: StoryObj<OverlappedBarChartProps> = {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: edgeCaseCloseData,
  },
};

export const WithCustomizableInnerBarTextColor: StoryObj<OverlappedBarChartProps> =
  {
    args: {
      barKeys: ['inquiries', 'applicants'],
      data: edgeCaseCloseData,
      innerBarTextColor: 'red',
    },
  };

export const LowData: StoryObj<OverlappedBarChartProps> = {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: edgeCaseLowData,
  },
};

export const NoData: StoryObj<OverlappedBarChartProps> = {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: edgeCaseNoData,
  },
};

export const WithDifferentBarsSize: StoryObj<OverlappedBarChartProps> = {
  args: {
    barChartProps: {
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
    },
    barKeys: ['inquiries', 'applicants'],
    data: defaultData,
  },
};

export const WithLabelProps: StoryObj<OverlappedBarChartProps> = {
  args: {
    barKeys: ['inquiries', 'applicants'],
    data: defaultData,
    labelProps: { position: 'top' },
  },
};
