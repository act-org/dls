/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { standard } from '../../helpers/test';
import { noop } from 'lodash';
import { EmptyState } from '.';

describe('EmptyStatePrimary', () => {
  const Component = (
    <EmptyState
      buttonProps={{
        children: 'Button Title',
        onClick: noop,
      }}
      description="Description"
      title="Title"
    />
  );
  standard(Component);
});
