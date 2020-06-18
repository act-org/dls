/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import EmptyState from '.';

describe('EmptyState', () => {
  it('matches the snapshot', () => {
    const tree = render(
      <EmptyState
        action={{
          disabled: true,
          onClick: noop,
          title: 'Action Title',
        }}
        description="EmptyState Description"
        style={{ color: 'red' }}
        title="EmptyState Title"
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
