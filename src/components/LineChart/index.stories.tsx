/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryContext } from '@storybook/react-webpack5';
import { YAxisProps } from 'recharts';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import { Playground } from '~/helpers/playground';
import THEME_ACT from '~/styles/themeAct';
import THEME_ACT_ET from '~/styles/themeActEt';
import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';
import THEME_ENCOURAGE_V2 from '~/styles/themeEncourage';

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

const getMergedYAxisProps = (
  args: LineChartProps,
  globals: StoryContext['globals'],
): YAxisProps => {
  const { theme } = globals;
  let yAxisStyle;

  switch (theme) {
    case 'ACT': {
      yAxisStyle =
        THEME_ACT?.components?.[DLS_COMPONENT_NAMES.LINE_CHART]?.defaultProps
          ?.yAxisProps;
      break;
    }
    case 'ACT_ET': {
      yAxisStyle =
        THEME_ACT_ET?.components?.[DLS_COMPONENT_NAMES.LINE_CHART]?.defaultProps
          ?.yAxisProps;
      break;
    }
    case 'ENCOURAGE': {
      yAxisStyle =
        THEME_ENCOURAGE_V2?.components?.[DLS_COMPONENT_NAMES.LINE_CHART]
          ?.defaultProps?.yAxisProps;
      break;
    }
    default: {
      yAxisStyle =
        THEME_ENCOURA_CLASSIC?.components?.[DLS_COMPONENT_NAMES.LINE_CHART]
          ?.defaultProps?.yAxisProps;
    }
  }

  return { ...args.yAxisProps, ...yAxisStyle };
};

export const Default = (
  args: LineChartProps,
  context: StoryContext,
): React.ReactElement => {
  const { globals } = context;
  const mergedYAxisProps = getMergedYAxisProps(args, globals);
  return <LineChart {...args} yAxisProps={mergedYAxisProps} />;
};

export const WithCustomLineColors = (
  args: LineChartProps,
  context: StoryContext,
): React.ReactElement => {
  const { globals } = context;
  const mergedYAxisProps = getMergedYAxisProps(args, globals);
  return (
    <LineChart
      {...args}
      colors={['#FF0000', '#00FF00', '#0000FF']}
      yAxisProps={mergedYAxisProps}
    />
  );
};
