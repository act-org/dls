/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { useTheme } from '@mui/material/styles';
import { isNumber } from 'lodash';
import * as React from 'react';
import { LabelProps } from 'recharts';

import { StyledText } from './styles';

export type OverlappedLabelProps = LabelProps & {
  data: Record<string, number | string>[];
  index: number;
  isOutsideBar?: boolean;
  label: string;
  labelColor?: string;
  outsideBarDataKey: string;
  valueColor?: string;
};

export const OverlappedLabel: React.FC<OverlappedLabelProps> = ({
  color,
  data,
  height,
  index,
  isOutsideBar,
  label,
  labelColor,
  outsideBarDataKey,
  value,
  valueColor,
  width,
  x,
  y,
}: OverlappedLabelProps): React.ReactElement<OverlappedLabelProps> => {
  const { palette, spacing } = useTheme();

  if (!value && isOutsideBar)
    return (
      <g>
        <StyledText
          dominantBaseline="middle"
          fill={palette.text.primary}
          textAnchor="middle"
          x={(x as number) + (width as number) / 2}
          y={(y as number) - parseInt(spacing(1), 10)}
        >
          No data found
        </StyledText>
      </g>
    );

  let baselineY = Number(y);
  const outsideBarValue = Number(data?.[index]?.[outsideBarDataKey]);
  const outsideBarHeight =
    (outsideBarValue / Number(value)) * Number(height || 0);

  // isInsideInnerBar means whether the label should be inside the bars, that themselves are inside the outside bar
  const isInsideInnerBar =
    !isOutsideBar && Number(height) >= parseInt(spacing(6.5), 10);

  if (
    !isOutsideBar &&
    (Number.isNaN(outsideBarHeight) ||
      (Number(height) < 50 &&
        outsideBarHeight - Number(height) < parseInt(spacing(4.5), 10)) ||
      !outsideBarValue)
  ) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  if (!isInsideInnerBar) {
    baselineY = Number(y) - parseInt(spacing(1), 10);
  } else {
    baselineY = Number(y) + parseInt(spacing(6), 10);
  }

  return (
    <g>
      <StyledText
        dominantBaseline="middle"
        fill={
          isOutsideBar || isInsideInnerBar
            ? palette.text.primary
            : labelColor || color
        }
        textAnchor="middle"
        x={(x as number) + (width as number) / 2}
        y={baselineY - parseInt(spacing(2), 10)}
      >
        {(label?.[0] || '').toUpperCase() + label.substring(1)}
      </StyledText>
      <StyledText
        dominantBaseline="middle"
        fill={
          isOutsideBar || isInsideInnerBar
            ? palette.text.primary
            : valueColor || color
        }
        textAnchor="middle"
        x={(x as number) + (width as number) / 2}
        y={baselineY}
      >
        {isNumber(value) ? value.toLocaleString('en-US') : value}
      </StyledText>
    </g>
  );
};

OverlappedLabel.defaultProps = {
  isOutsideBar: undefined,
  labelColor: undefined,
  valueColor: undefined,
};

export default OverlappedLabel;
