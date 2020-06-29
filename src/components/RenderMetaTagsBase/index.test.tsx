/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import RenderMetaTagsBase from '.';

describe('RenderMetaTagsBase', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <RenderMetaTagsBase
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
