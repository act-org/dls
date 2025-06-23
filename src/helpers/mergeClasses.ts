/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import mergeWith from 'lodash/mergeWith';

type Classes = any;

export const mergeClasses = (classes1: Classes, classes2: Classes): Classes =>
  mergeWith(classes1 || {}, classes2 || {}, (className1, className2): string =>
    clsx(className1, className2),
  );

export default mergeClasses;
