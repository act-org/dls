import { TypographyVariantsOptions } from '@mui/material/styles';

import COLORS from './colors';

const TYPOGRAPHY: TypographyVariantsOptions = {
  body1: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 24 / 16,
  },
  body2: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 24 / 14,
  },
  button: {
    color: COLORS.PRIMARY_LIGHT,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 24 / 14,
    textTransform: 'none',
  },
  caption: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 16 / 12,
  },
  fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
  fontSize: 18,
  fontWeightBold: 700,
  fontWeightLight: 300,
  fontWeightMedium: 600,
  fontWeightRegular: 500,
  h1: {
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 56 / 40,
  },
  h2: {
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 48 / 32,
  },
  h3: {
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 40 / 28,
  },
  h4: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 40 / 28,
  },
  h5: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 32 / 24,
  },
  h6: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 32 / 20,
  },
  htmlFontSize: 16,
  overline: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.496,
    lineHeight: 16 / 12,
    textTransform: 'uppercase',
  },
  subtitle1: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.496,
    lineHeight: 16 / 12,
    textTransform: 'uppercase',
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 24 / 14,
  },
};

export default TYPOGRAPHY;
