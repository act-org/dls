/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import LinkBase from '.';

describe('LinkBase', () => {
  it('matches the snapshot', () => {
    const tree = render(
      <LinkBase target="_blank" to="https://www.act.org">
        <div>children</div>
      </LinkBase>,
    );

    expect(tree).toMatchSnapshot();
  });
});
