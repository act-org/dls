/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Radio as MiuRadio, RadioProps } from '@material-ui/core';

export type { RadioProps };

/**
 * # Radio
 *
 * The Radio component is used to select a single option from a list.
 * Our implementation is based on the
 * <a href="https://material-ui.com/components/radio-buttons" target="_blank">Radio</a>
 * &nbsp;component from Material UI.
 *
 * @param RadioProps
 */
export const Radio: React.FC<RadioProps> = (
  props: RadioProps,
): React.ReactElement<RadioProps> => {
  return <MiuRadio {...props} />;
};

export default Radio;
