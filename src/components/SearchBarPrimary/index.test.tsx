/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import SearchBarPrimary from '.';

describe('SearchBarPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SearchBarPrimary onChange={noop} value="Value" />,
    );

    expect(container).toMatchSnapshot();
  });
});
