/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import { RenderMetaTags } from '.';

describe('RenderMetaTagsBase', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <RenderMetaTags
          description="Some description."
          imageUrl="https://mawi.et-act.org"
          keywords={['keyword1', 'keyword2', 'keyword3']}
          title="Some Title"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
