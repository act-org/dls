/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import noop from 'lodash/noop';

import { standard } from '~/helpers/test';

import { EmptyState } from '.';

describe('EmptyState', () => {
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
