/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { XAxisProps, YAxisProps } from 'recharts';

import { ScatterPlotData } from '~/types';

export type ICoordinate = [number, number];

export interface IScatterDomain {
  x: ICoordinate;
  y: ICoordinate;
}

export interface IGroupDataPoint {
  x: number;
  y: number;
  label: string;
  members: ScatterPlotData[];
  groupSize: number;
}

export interface IMinMaxData {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export type CustomDomain =
  | ICoordinate
  | (([dataMin, dataMax]: ICoordinate) => ICoordinate);

export interface CustomXAxisProps extends XAxisProps {
  domain?: CustomDomain;
}

export interface CustomYAxisProps extends YAxisProps {
  domain?: CustomDomain;
}

export interface IBuildDataOptions {
  xSpreadPercentForJoin?: number;
  ySpreadPercentForJoin?: number;
  defaultXForJoin?: number;
  defaultYForJoin?: number;
}

export interface ILabelPositionInfo {
  label: string;
  width: number;
  x: number;
  y: number;
}

export interface IPixelConversions {
  x: number;
  y: number;
}

export interface IOffsets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface IPlotDimensions {
  height: number;
  width: number;
  offset: IOffsets;
}

export interface IScatterRefNode {
  state?: {
    offset?: {
      height?: number;
      width?: number;
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
    };
  };
}

export interface IZoomOptions {
  wheelZoom?: number;
  doubleClickZoom?: number;
}
