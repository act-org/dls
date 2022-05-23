/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonProps, IconProps, TypographyProps } from '@mui/material';
import { isString } from 'lodash';
import { styled } from '@mui/material/styles';

import {
  StyledContainer,
  StyledGridContainer,
  StyledGridItem,
  StyledTypographyDescription,
  StyledTypographyTitle,
} from './styles';

export interface EmptyStateProps {
  buttonProps?: ButtonProps;
  description?: any;
  descriptionTypographyProps?: TypographyProps;
  Icon?: React.FC<any> | React.ComponentClass<any>;
  iconProps?: IconProps;
  style?: React.CSSProperties;
  title?: string | React.ReactElement<unknown>;
  titleTypographyProps?: TypographyProps & {
    component?: string;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  buttonProps,
  description,
  descriptionTypographyProps,
  Icon,
  iconProps,
  style,
  title,
  titleTypographyProps,
}: EmptyStateProps): React.ReactElement<EmptyStateProps> => {
  const StyledIcon = Icon
    ? styled(Icon)<
        IconProps & {
          titleAccess?: string;
        }
      >({
        height: 50,
        width: 50,
      })
    : undefined;

  return (
    <StyledContainer style={style}>
      {StyledIcon && (
        <StyledIcon
          color="disabled"
          titleAccess={isString(title) ? title : undefined}
          {...iconProps}
        />
      )}

      {title && (
        <StyledGridContainer
          alignItems="center"
          container
          justifyContent="center"
        >
          <StyledGridItem item>
            <StyledTypographyTitle
              align="center"
              component="h6"
              variant="body1"
              {...titleTypographyProps}
            >
              {title}
            </StyledTypographyTitle>
          </StyledGridItem>
        </StyledGridContainer>
      )}

      {description && (
        <StyledTypographyDescription
          align="center"
          color="textSecondary"
          variant="body1"
          withoutTitle={!title}
          {...descriptionTypographyProps}
        >
          {description}
        </StyledTypographyDescription>
      )}

      {buttonProps && <Button {...buttonProps} />}
    </StyledContainer>
  );
};

export default EmptyState;
