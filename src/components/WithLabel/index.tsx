import { Grid, Typography, GridProps, TypographyProps } from '@mui/material';
import React from 'react';

export type IWithLabelLabelProps = Partial<TypographyProps & { children: string | number; required?: boolean; removeColon?: boolean }>;

export interface IWithLabelProps {
  containerProps?: GridProps;
  label?: string;
  labelProps?: IWithLabelLabelProps;
  required?: boolean;
  removeColon?: boolean;
  children: React.ReactNode;
}

export const LabelComponent: React.FC<IWithLabelLabelProps> = ({ children, required, removeColon, ...rest }) => (
  <Typography sx={{ fontSize: 'body2.fontSize', fontWeight: 'fontWeightMedium', zIndex: 2 }} {...rest}>{`${children || ''}${removeColon ? '' : ':'} ${
    required ? '*' : ''
  }`}</Typography>
);

export const WithLabel: React.FC<IWithLabelProps> = ({ containerProps, label, labelProps, required, removeColon, children }) => {
  return (
    <Grid container flexDirection="column" justifyContent="start" margin={0} spacing={1} width="auto" {...containerProps}>
      {label && (
        <LabelComponent removeColon={removeColon} required={required} {...labelProps}>
          {label}
        </LabelComponent>
      )}
      {children}
    </Grid>
  );
};

WithLabel.defaultProps = {
  containerProps: undefined,
  label: undefined,
  labelProps: undefined,
  removeColon: false,
  required: false,
}

export default WithLabel;
