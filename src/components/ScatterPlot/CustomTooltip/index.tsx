/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import Paper from '@mui/material/Paper';
import { get } from 'lodash';
import React from 'react';
import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

import { IGroupDataPoint } from '../types';

import { StyledDataLabelTypography, StyledDataValueTypography } from './styles';

type ICustomTooltipProps = {
  CustomTooltipContent?: React.ElementType;
  isBlockingOnHovers: boolean;
} & TooltipProps<ValueType, NameType>;

export const CustomTooltip: React.FC<ICustomTooltipProps> = ({
  CustomTooltipContent,
  isBlockingOnHovers,
  payload,
}): React.ReactElement<TooltipProps<ValueType, NameType>> | null => {
  const data = payload && (get(payload[0], 'payload') as IGroupDataPoint);
  const members = data?.members;

  if (isBlockingOnHovers) {
    return null;
  }

  function renderContent(): JSX.Element | JSX.Element[] {
    if (CustomTooltipContent) {
      return <CustomTooltipContent payload={payload} />;
    }
    if (members?.length) {
      return members.map(el => (
        <>
          <StyledDataLabelTypography>
            {el?.label || ''}
          </StyledDataLabelTypography>
          <StyledDataValueTypography>x: {el.x}</StyledDataValueTypography>
          <StyledDataValueTypography>y: {el.y}</StyledDataValueTypography>
        </>
      ));
    }
    return (
      <>
        <StyledDataLabelTypography>
          {data?.label || ''}
        </StyledDataLabelTypography>
        <StyledDataValueTypography>x: {data?.x}</StyledDataValueTypography>
        <StyledDataValueTypography>y: {data?.y}</StyledDataValueTypography>
      </>
    );
  }

  return (
    <Paper elevation={1} sx={{ p: 1 }}>
      {renderContent()}
    </Paper>
  );
};

CustomTooltip.defaultProps = {
  CustomTooltipContent: undefined,
};

export default CustomTooltip;
