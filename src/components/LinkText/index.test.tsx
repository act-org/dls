/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import LinkText from '.';

describe('LinkText', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <LinkText target="_blank" to="https://www.act.org">
        <div>children</div>
      </LinkText>,
    );

    expect(container).toMatchSnapshot();
  });
});