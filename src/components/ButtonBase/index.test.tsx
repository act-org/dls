/**
 * @prettier
 */

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { noop } from 'lodash';

import ButtonBase from '.';

describe('ButtonBase', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<ButtonBase onClick={noop}>Button Label</ButtonBase>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
