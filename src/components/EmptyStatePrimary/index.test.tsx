/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import EmptyStatePrimary from '.';

describe('EmptyStatePrimary', () => {
  it('matches the snapshot', () => {
    const tree = render(
      <EmptyStatePrimary
        buttonProps={{
          children: 'Button Title',
          onClick: noop,
        }}
        description="Description"
        title="Title"
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
