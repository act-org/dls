/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import MenuItemBase from '~/components/MenuItemBase';
import render from '~/helpers/test/render';

import SelectPrimary from '.';

describe('SelectPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SelectPrimary onChange={noop} value="ONE">
        <MenuItemBase value="ONE">One</MenuItemBase>
      </SelectPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
