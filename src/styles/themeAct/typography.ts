/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const TYPOGRAPHY: TypographyOptions = {
  body1: {
    fontSize: '1.5em',
    fontWeight: 400,
    lineHeight: '1.5em',
  },
  body2: {
    fontSize: '1em',
    fontWeight: 400,
    lineHeight: '1.5em',
  },
  button: {
    textTransform: 'none',
  },
  fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
  fontSize: 16,
  fontWeightBold: 700,
  fontWeightLight: 300,
  fontWeightMedium: 600,
  fontWeightRegular: 500,
  h1: {
    fontSize: '2.5em',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.125em',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.75em',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.5em',
    fontWeight: 700,
  },
  h5: {
    fontSize: '1.125em',
    fontWeight: 600,
  },
  h6: {
    fontSize: '1em',
    fontWeight: 600,
  },
  htmlFontSize: 16,
};

export default TYPOGRAPHY;
