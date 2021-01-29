/**
 * @prettier
 */

import * as React from 'react';

import render from '../../helpers/test/render';

import { Link } from '.';

describe('LinkText', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Link target="_blank" href="https://www.act.org">
        <div>children</div>
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });
});
