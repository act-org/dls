/**
 * @prettier
 */

;
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import InputPrimary from '.';

describe('InputPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <InputPrimary onChange={noop} value="Value" />,
    );

    expect(container).toMatchSnapshot();
  });
});
