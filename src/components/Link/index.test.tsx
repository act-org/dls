/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';
import renderer from 'react-test-renderer';

import Link from '.';

describe('Link', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Link
          onClick={noop}
          style={{ color: 'red' }}
          target="_blank"
          to="https://www.act.org"
          variant="text"
        >
          <div>children</div>
        </Link>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
