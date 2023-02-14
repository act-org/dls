/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '@actinc/dls/helpers/test';

import { RenderMetaTags } from '.';

describe('RenderMetaTagsBase', () => {
  const Component = (
    <RenderMetaTags
      description="Some description."
      imageUrl="https://mawi.et-act.org"
      keywords={['keyword1', 'keyword2', 'keyword3']}
      title="Some Title"
    />
  );
  standard(Component);
});
