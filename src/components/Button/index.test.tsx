/**
 * @prettier
 */

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { noop } from 'lodash';

import Button from '.';

describe('Button', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Button onClick={noop}>Button Label</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
