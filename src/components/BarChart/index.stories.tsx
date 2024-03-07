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
import { Scatter } from 'recharts';
import { ScatterCustomizedShape } from 'recharts/types/cartesian/Scatter';

import { Playground } from '~/helpers/playground';

import {
  defaultBarKeys,
  defaultBarKeysFourLines,
  defaultData,
  defaultDataFourLines,
  longBarKeys,
  longLabelData,
  longSubLabelData,
  useEnrollmentLensBarColors,
} from './mocks';

import { BarChart, BarChartProps } from '.';

export default {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
  },
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
  component: BarChart,
  tags: ['autodocs'],
  title: 'Molecules / BarChart',
} as Meta<BarChartProps>;

export const WithCustomBarColors: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    customizeBarFillColor: useEnrollmentLensBarColors,
    data: defaultData,
  },
};

export const WithOneGroupedBars: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: [
      {
        '2019': 200,
        '2020': 223,
        '2021': 225,
        name: 'White/Caucasian',
      },
    ],
  },
};

export const WithFourLines: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeysFourLines,
    data: defaultDataFourLines,
  },
};

export const WithoutTooltip: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    tooltipProps: { cursor: false, wrapperStyle: { visibility: 'hidden' } },
  },
};

export const WithCustomTooltip: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
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

export const UngroupedBarChart: StoryObj<BarChartProps> = {
  args: {
    barKeys: ['2019'],
    data: defaultData,
  },
};

export const VerticalBarChart: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    chartProps: { layout: 'horizontal', margin: { left: 0 } },
    data: defaultData,
    labelListProps: { position: 'top' },
    maxHeight: 'auto',
    subLabelProps: { position: 'bottom' },
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
      tick: undefined,
      type: 'number',
    },
  },
};

export const WithThinBarSize: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    chartProps: { barSize: 10 },
    data: defaultData,
  },
};

export const WithBarPropsOnclick: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    barProps: { onClick: e => console.log(e) },
    data: defaultData,
  },
  name: 'With Bar Props: onClick',
};

export const WithScatter: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    children: (
      <>
        <Scatter
          dataKey="2019scatter"
          fill="red"
          shape={
            (({
              fill,
              height,
              width,
              x,
              cy,
            }: {
              fill: string;
              height: number;
              width: number;
              x: number;
              cy: number;
            }) => (
              <g>
                <circle
                  cx={x + width / 2}
                  cy={Math.floor(cy - height / 2 - height * 2)}
                  fill={fill}
                  r={height}
                />
              </g>
            )) as ScatterCustomizedShape
          }
        />
        <Scatter
          dataKey="2020scatter"
          fill="red"
          shape={
            (({
              fill,
              height,
              width,
              x,
              y,
            }: {
              fill: string;
              height: number;
              width: number;
              x: number;
              y: number;
            }) => (
              <g>
                <circle
                  cx={x + width / 2}
                  cy={y + height / 2}
                  fill={fill}
                  r={height}
                />
              </g>
            )) as ScatterCustomizedShape
          }
        />
        <Scatter
          dataKey="2021scatter"
          fill="red"
          shape={
            (({
              fill,
              height,
              width,
              x,
              cy,
            }: {
              fill: string;
              height: number;
              width: number;
              x: number;
              cy: number;
            }) => (
              <g>
                <circle
                  cx={x + width / 2}
                  cy={cy + height / 2 + height * 2}
                  fill={fill}
                  r={height}
                />
              </g>
            )) as ScatterCustomizedShape
          }
        />
      </>
    ),
    data: defaultData,
    tooltipProps: {
      renderAdditionalInfo: (barId, payload) => {
        const scatterInfo = payload.find(
          el => el.dataKey === `${barId}scatter`,
        );

        if (!scatterInfo) {
          return null;
        }

        return <div>Scatter: {scatterInfo.value}</div>;
      },
    },
  },
};

export const WithCartesianGridProps: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    cartesianGridProps: { horizontal: false, stroke: '#000' },
    data: defaultData,
  },
};

export const WithoutScroll: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    maxHeight: 1000,
  },
};

export const WithDynamicHeightFunctionAndWidth: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    height: initialHeight => initialHeight + 250,
    width: 600,
  },
};

export const WithFixedHeightAndWidth: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    height: 350,
    width: 600,
  },
};

export const WithXAxisProps: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    xAxisProps: {
      axisLine: true,
      orientation: 'bottom',
      tickLine: true,
    },
  },
};

export const WithYAxisProps: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    yAxisProps: {
      axisLine: false,
      dx: 0,
      orientation: 'right',
      tick: undefined,
      tickLine: false,
    },
  },
};

export const WithCustomLabel: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: defaultData,
    subLabels: ['2019 test', '2020 test', '2021 test'],
  },
};

export const LongLabel: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    data: longLabelData,
  },
};

export const LongSubLabel: StoryObj<BarChartProps> = {
  args: {
    barKeys: longBarKeys,
    data: longSubLabelData,
  },
};

export const WithCustomizedAxisTickProps: StoryObj<BarChartProps> = {
  args: {
    barKeys: defaultBarKeys,
    customizedAxisTickProps: { textWidth: 110 },
    data: defaultData,
    subLabelWidth: 50,
  },
};
