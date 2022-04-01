/**
 * @prettier
 */

import render from '~/helpers/test/render';

import InputLabelPrimary from '.';

describe('InputLabelPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <InputLabelPrimary color="primary" required>
        InputLabel
      </InputLabelPrimary>,
    );

    expect(container).toMatchSnapshot();
  });
});
