/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import MenuItemBase from '~/components/MenuItemBase';
import render from '~/helpers/test/render';

import SelectBase from '.';

describe('SelectBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SelectBase onChange={noop} value="ONE">
        <MenuItemBase value="ONE">One</MenuItemBase>
      </SelectBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
