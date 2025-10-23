/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryContext, StoryObj } from '@storybook/react-webpack5';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import { Playground } from '~/helpers/playground';
import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';
import THEME_ENCOURAGE_V2 from '~/styles/themeEncourage';

import { defaultBarKeys, defaultData, longBarKeys, longLabelData, longSubLabelData } from './mocks';

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

export const Default: StoryObj<StackedBarChartProps> = {};

export const CustomColors: StoryObj<StackedBarChartProps> = {
  args: {
    colors: ['#FF0000', '#00FF00', '#0000FF'],
  },
};

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

const getMergedSubLabelProps = (
  subLabelProps: StackedBarChartProps['subLabelProps'],
  globals: StoryContext['globals'],
): StackedBarChartProps['subLabelProps'] => {
  const { theme } = globals;
  let newSubLabelProps;

  switch (theme) {
    case 'ENCOURAGE': {
      newSubLabelProps = THEME_ENCOURAGE_V2?.components?.[DLS_COMPONENT_NAMES.STACKED_BAR_CHART]?.defaultProps?.subLabelProps;
      break;
    }
    default: {
      newSubLabelProps = THEME_ENCOURA_CLASSIC?.components?.[DLS_COMPONENT_NAMES.STACKED_BAR_CHART]?.defaultProps?.subLabelProps;
    }
  }

  return { ...subLabelProps, ...newSubLabelProps };
};

export const VerticalBarChart = (args: StackedBarChartProps, context: StoryContext): React.ReactElement => {
  const { globals } = context;
  const subLabelProps = {
    position: 'bottom',
  } as StackedBarChartProps['subLabelProps'];
  const mergedSubLabelProps = getMergedSubLabelProps(subLabelProps, globals);
  return (
    <StackedBarChart
      {...args}
      barChartProps={{
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
      }}
      barKeys={defaultBarKeys}
      data={defaultData}
      labelListProps={{ position: 'insideTop' }}
      subLabelProps={mergedSubLabelProps}
    />
  );
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
