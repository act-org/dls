/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

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
  component: LineChart,
  tags: ['autodocs'],
  title: 'Molecules / Charts / LineChart',
} as Meta<LineChartProps>;

export const Default: StoryObj<LineChartProps> = {
  args: {},
};

export const WithCustomLineColors: StoryObj<LineChartProps> = {
  args: {
    colors: ['#FF0000', '#00FF00', '#0000FF'],
  },
};
