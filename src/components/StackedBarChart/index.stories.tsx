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

import {
  defaultBarKeys,
  defaultData,
  longBarKeys,
  longLabelData,
  longSubLabelData,
} from './mocks';

import { StackedBarChart, StackedBarChartProps } from '.';

export default {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
  },
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
  component: StackedBarChart,
  tags: ['autodocs'],
  title: 'Molecules / Charts / StackedBarChart',
} as Meta<StackedBarChartProps>;

export const CustomSublabels: StoryObj<StackedBarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    subLabels: ['2019 test', '2020 test', '2021 test'],
  },
};

export const HidingBarLabelValue: StoryObj<StackedBarChartProps> = {
  args: {
    barChartProps: { subLabelWidth: 130 },
    barKeys: defaultBarKeys,
    data: [
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
    ],
  },
};

export const UngroupedStackedBarChart: StoryObj<StackedBarChartProps> = {
  args: {
    barKeys: [['2019', '2019a', '2019b']],
    data: defaultData,
  },
};

export const VerticalBarChart: StoryObj<StackedBarChartProps> = {
  args: {
    barChartProps: {
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
    },
    barKeys: defaultBarKeys,
    data: defaultData,
    labelListProps: { position: 'insideTop' },
    subLabelProps: { position: 'bottom' },
  },
};

export const LongLabel: StoryObj<StackedBarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: longLabelData,
  },
};

export const LongSublabel: StoryObj<StackedBarChartProps> = {
  args: {
    barKeys: longBarKeys,
    data: longSubLabelData,
  },
};
