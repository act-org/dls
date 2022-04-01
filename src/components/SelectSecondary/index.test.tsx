/**
 * @prettier
 */

import { MenuItem } from '@mui/material';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import SelectSecondary from '.';

describe('SelectSecondary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SelectSecondary onChange={noop} value="ONE">
        <MenuItem value="ONE">One</MenuItem>
      </SelectSecondary>,
    );

    expect(container).toMatchSnapshot();
  });
});
