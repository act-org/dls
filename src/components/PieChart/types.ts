/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface PieDataProps {
  color?: string;
  name: string;
  value: number;
  [x: string]: any;
}

export interface HightlightComponentProps {
  payload: Partial<PieDataProps>;
  pieTotalValue: number;
  availableViewBoxDimension: number;
}

export type HighlightComponentType = React.ElementType<HightlightComponentProps>;

export interface CustomLegendIconProps {
  chartWidth?: number;
  color?: string;
  index: number;
  optionsLength: number;
  payload: Partial<PieDataProps>;
  showAsSquare?: boolean;
}

export type CustomLegendComponentType = React.ElementType<CustomLegendIconProps>;
