/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '@actinc/dls/helpers/test';

import { Alert } from '.';

describe('Alert', () => {
  const Component = <Alert title="Title Here">Alert text</Alert>;
  standard(Component);
});
