/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import EmptyStateBase from '.';

describe('EmptyStateBase', () => {
  it('matches the snapshot', () => {
    const tree = render(
      <EmptyStateBase
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
