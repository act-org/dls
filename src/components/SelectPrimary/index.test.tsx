/**
 * @prettier
 */

;
import { MenuItem } from '@mui/material';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import SelectPrimary from '.';

describe('SelectPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SelectPrimary onChange={noop} value="ONE">
        <MenuItem value="ONE">One</MenuItem>
      </SelectPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
