/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable security/detect-non-literal-regexp */

import { Tooltip, TypographyProps } from '@mui/material';
import React from 'react';
import { XAxisProps } from 'recharts';

import { VariantType } from '~/types';

import { StyledTypography } from './styles';

interface PayloadProps {
  value: string;
}

export type CustomizedAxisTickProps = XAxisProps & {
  onClick?: (e: PayloadProps) => void;
  payload?: PayloadProps;
  textWidth?: number;
  variant?: VariantType;
  yAxisLabelTypographyProps?: TypographyProps;
};

export const CustomizedAxisTick: React.FC<CustomizedAxisTickProps> = ({
  onClick,
  y,
  textWidth,
  payload,
  height,
  orientation,
  type,
  style,
  variant,
  yAxisLabelTypographyProps,
}): React.ReactElement<CustomizedAxisTickProps> => {
  const onClickHandler = (): void => {
    if (onClick && payload) {
      onClick(payload);
    }
  };
  return (
    <foreignObject
      height={height}
      orientation={orientation}
      requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      style={style}
      textAnchor="middle"
      type={type}
      width={textWidth || (variant ? 60 : 80)}
      y={(y as number) - 20}
    >
      <Tooltip title={payload?.value || ''}>
        <StyledTypography noWrap onClick={onClickHandler} {...yAxisLabelTypographyProps}>
          {payload?.value}
        </StyledTypography>
      </Tooltip>
    </foreignObject>
  );
};

export default CustomizedAxisTick;
