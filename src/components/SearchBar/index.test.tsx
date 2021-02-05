/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '../../helpers/test/render';

import { SearchBar } from '.';

describe('SearchBarPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(<SearchBar onChange={noop} value="Value" />);

    expect(container).toMatchSnapshot();
  });
});
