/**
 * @prettier
 */

import clsx from 'clsx';
import { mergeWith } from 'lodash';

type Classes = any;

const mergeClasses = (classes1: Classes, classes2: Classes): Classes =>
  mergeWith(classes1 || {}, classes2 || {}, (className1, className2): string =>
    clsx(className1, className2),
  );

export default mergeClasses;
