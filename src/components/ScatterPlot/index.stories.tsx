/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryContext } from '@storybook/react-webpack5';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import { Playground } from '~/helpers/playground';
import THEME_ENCOURA_CLASSIC from '~/styles/themeEncouraClassic';
import THEME_ENCOURAGE_V2 from '~/styles/themeEncourage';

import { defaultData, LARGE_DATA } from './mocks';
import { CustomYAxisProps } from './types';

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

const getMergedYAxisProps = (
  args: ScatterPlotProps,
  globals: StoryContext['globals'],
): CustomYAxisProps => {
  const { theme } = globals;
  let yAxisStyle;

  switch (theme) {
    case 'ENCOURAGE': {
      yAxisStyle =
        THEME_ENCOURAGE_V2?.components?.[DLS_COMPONENT_NAMES.SCATTER_PLOT]
          ?.defaultProps?.yAxisProps;
      break;
    }
    default: {
      yAxisStyle =
        THEME_ENCOURA_CLASSIC?.components?.[DLS_COMPONENT_NAMES.SCATTER_PLOT]
          ?.defaultProps?.yAxisProps;
    }
  }

  return { ...args.yAxisProps, ...yAxisStyle } as CustomYAxisProps;
};

export const Default = (
  args: ScatterPlotProps,
  context: StoryContext,
): React.ReactElement => {
  const { globals } = context;
  const mergedYAxisProps = getMergedYAxisProps(args, globals);
  return <ScatterPlot {...args} yAxisProps={mergedYAxisProps} />;
};

export const CustomColor = (
  args: ScatterPlotProps,
  context: StoryContext,
): React.ReactElement => {
  const { globals } = context;
  const mergedYAxisProps = getMergedYAxisProps(args, globals);
  return <ScatterPlot {...args} color="red" yAxisProps={mergedYAxisProps} />;
};

export const LargeDataset = (
  args: ScatterPlotProps,
  context: StoryContext,
): React.ReactElement => {
  const { globals } = context;
  const mergedYAxisProps = getMergedYAxisProps(args, globals);
  return (
    <ScatterPlot
      {...args}
      data={LARGE_DATA}
      height={600}
      xLabelValue="X Value"
      yAxisProps={mergedYAxisProps}
      yLabelValue="Y Value"
    />
  );
};

export const WithoutRankSummary = (
  args: ScatterPlotProps,
  context: StoryContext,
): React.ReactElement => {
  const { globals } = context;
  const mergedYAxisProps = getMergedYAxisProps(args, globals);
  return (
    <ScatterPlot
      {...args}
      data={LARGE_DATA}
      height={600}
      hideSummary
      xLabelValue="Inquiries to Applicants"
      yAxisProps={mergedYAxisProps}
      yLabelValue="Inquiries"
    />
  );
};
