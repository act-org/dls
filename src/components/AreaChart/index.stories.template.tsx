/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { Playground } from '~/helpers/playground';

import { AreaChart, AreaChartProps } from '.';

export const percentageData = [
  {
    name: 'Day 1',
    A: 0.2,
  },
  {
    name: 'Day 2',
    A: 0.6,
  },
  {
    name: 'Day 3',
    A: 0.35,
  },
  {
    name: 'Day 4',
    A: 0.34,
  },
  {
    name: 'Day 5',
    A: 0.82,
  },
  {
    name: 'Day 6',
    A: 0.2,
  },
  {
    name: 'Day 7',
    A: 1,
  },
];

export const defaultData = [
  {
    name: 'Day 1',
    A: 7,
  },
  {
    name: 'Day 2',
    A: 15,
  },
  {
    name: 'Day 3',
    A: 18,
  },
  {
    name: 'Day 4',
    A: 12,
  },
  {
    name: 'Day 5',
    A: 4,
  },
  {
    name: 'Day 6',
    A: 9,
  },
  {
    name: 'Day 7',
    A: 11,
  },
  {
    name: 'Day 7',
    A: 4,
  },
];

export const largerDataset = [
  {
    name: 'Day 1',
    A: 2,
    B: 8,
  },
  {
    name: 'Day 2',
    A: 5,
    B: 17,
  },
  {
    name: 'Day 3',
    A: 18,
    B: 18,
  },
  {
    name: 'Day 4',
    A: 4,
    B: 24,
  },
  {
    name: 'Day 5',
    A: 22,
    B: 6,
  },
  {
    name: 'Day 6',
    A: 15,
    B: 4,
  },
];

export const Template: StoryFn<AreaChartProps> = args => {
  return <AreaChart {...args} />;
};

export const argTypes = Playground(
  {
    areaProps: {},
    areaChartProps: {},
    colors: {},
    responsiveContainerProps: {},
    tooltipProps: {},
    data: {},
    height: {},
    legendProps: {},
    width: {},
    showLegend: {},
    areaKeys: {},
    xAxisProps: {},
    yAxisProps: {},
    xLabel: {},
    xLabelProps: {},
    yLabel: {},
    yLabelProps: {},
    yReferenceValue: {},
  },
  AreaChart,
);
