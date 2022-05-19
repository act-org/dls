/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ spacing, typography }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRoot: {
    marginBottom: spacing(2),
    marginTop: spacing(0.5),
    maxWidth: 350,
  },
  descriptionRootFlexibleHeight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRootWithoutTitle: {
    marginTop: spacing(2),
  },
  iconRoot: {
    height: 50,
    width: 50,
  },
  titleGridContainer: {
    marginBottom: spacing(1),
    marginTop: spacing(1),
    maxWidth: 300,
  },
  titleGridContainerWithDescription: {
    marginBottom: spacing(0.5),
  },
  titleGridItem: {
    display: 'flex',
  },
  titleRoot: {
    // Use one font weight higher than `body1` (varies from theme to theme)
    fontWeight: Number(typography.body1.fontWeight) + 100,
    // Scale the font to be 20% larger than `body1` (also varies from theme to theme)
    transform: 'scale(1.2)',
  },
}));
