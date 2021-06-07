/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ palette, spacing }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRoot: {
    color: palette.text.secondary,
    marginBottom: spacing(2),
    marginTop: spacing(1) / 2,
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
    marginBottom: spacing(1) / 2,
  },
  titleGridItem: {
    display: 'flex',
  },
}));
