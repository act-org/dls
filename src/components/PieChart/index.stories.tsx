/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Box, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Pie } from 'recharts';

import { Playground } from '~/helpers/playground';

import { defaultData, moreOptionsData } from './mocks';
import { HighlightComponentType } from './types';

import { PieChart, PieChartProps } from '.';

export default {
  args: {
    data: defaultData,
  },
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
  component: PieChart,
  tags: ['autodocs'],
  title: 'Molecules / Charts / PieChart',
} as Meta<PieChartProps>;

export const Default: StoryObj<PieChartProps> = {};

export const CustomColors: StoryObj<PieChartProps> = {
  args: {
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
  },
};

export const WithTitle: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    titleProps: { title: '2021 Students as of 4/6/2021' },
  },
};

export const WithDifferentTitleColor: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    titleProps: {
      className: 'someclassname',
      title: '2021 Students as of 4/6/2021',
    },
  },
};

export const MoreThan4Options: StoryObj<PieChartProps> = {
  args: {
    data: moreOptionsData,
  },
};

export const WithHighlight: StoryObj<PieChartProps> = {
  args: {
    data: moreOptionsData,
    HighlightComponent: (({ payload, availableViewBoxDimension }) => (
      <Box
        height={availableViewBoxDimension}
        width={availableViewBoxDimension}
        zIndex={-1}
      >
        <Typography fontWeight="bold">{payload.name}</Typography>
        <Typography>{payload.description}</Typography>
      </Box>
    )) as HighlightComponentType,
  },
};

export const PieWithinAPie: StoryObj<PieChartProps> = {
  args: {
    children: (
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
    ),
    data: defaultData,
    legendProps: { align: 'right' },
  },
};

export const WithoutTooltip: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    tooltipProps: { cursor: false, wrapperStyle: { visibility: 'hidden' } },
  },
};

export const WithCustomTooltip: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    tooltipProps: {
      content: ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div style={{ backgroundColor: '#FFF' }}>
              <Typography variant="body1">{`${payload[0].value}`}</Typography>
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

export const WithDifferentPieProps: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    pieProps: {
      endAngle: 460,
      innerRadius: 130,
      outerRadius: 150,
      startAngle: 100,
    },
  },
};

export const WithLegendProps: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    legendProps: { layout: 'horizontal' },
  },
};

export const WithDifferentHeightAndWidth: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    height: 600,
    pieProps: { innerRadius: 230, outerRadius: 260 },
    width: 800,
  },
};

export const WithChartPropsOnClick: StoryObj<PieChartProps> = {
  args: {
    data: defaultData,
    pieChartProps: { onClick: e => console.log(e) },
  },
  name: 'With Chart Props: onClick',
};
