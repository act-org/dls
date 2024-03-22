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
  component: ScatterPlot,
  tags: ['autodocs'],
  title: 'Molecules / Charts / ScatterPlot',
} as Meta<ScatterPlotProps>;

export const Default: StoryObj<ScatterPlotProps> = {};

export const CustomColor: StoryObj<ScatterPlotProps> = {
  args: {
    color: 'red',
  },
};

export const LargeDataset: StoryObj<ScatterPlotProps> = {
  args: {
    data: LARGE_DATA,
    height: 600,
    xLabelValue: 'X Value',
    yLabelValue: 'Y Value',
  },
};

export const WithoutRankSummary: StoryObj<ScatterPlotProps> = {
  args: {
    data: LARGE_DATA,
    height: 600,
    hideSummary: true,
    xLabelValue: 'Inquiries to Applicants',
    yLabelValue: 'Inquiries',
  },
};
