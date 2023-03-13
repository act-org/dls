/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Button, { ButtonProps } from '@mui/material/Button';
import { IconProps } from '@mui/material/Icon';
import { TypographyProps } from '@mui/material/Typography';
import { isString } from 'lodash';
import {
  ComponentClass,
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
} from 'react';

import { styled } from '@actinc/dls/helpers/styled';

import {
  StyledContainer,
  StyledGridContainer,
  StyledGridItem,
  StyledTypographyDescription,
  StyledTypographyTitle,
} from './styles';

export interface EmptyStateProps {
  buttonProps?: ButtonProps;
  description?: string | ReactNode;
  descriptionTypographyProps?: TypographyProps;
  Icon?: FC<unknown> | ComponentClass<unknown>;
  iconProps?: IconProps;
  style?: CSSProperties;
  title?: string | ReactElement<unknown>;
  titleTypographyProps?: TypographyProps & {
    component?: string;
  };
}

export const EmptyState: FC<EmptyStateProps> = ({
  buttonProps,
  description,
  descriptionTypographyProps,
  Icon,
  iconProps,
  style,
  title,
  titleTypographyProps,
}: EmptyStateProps): ReactElement<EmptyStateProps> => {
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
          $withoutTitle={!title}
          align="center"
          color="textSecondary"
          variant="body1"
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
