/**
 * @prettier
 */

import { noop } from 'lodash';

import render from '~/helpers/test/render';

import FormInputPrimary from '.';

describe('FormInputPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <FormInputPrimary
        inputProps={{
          onChange: noop,
          value: 'Value',
        }}
        labelProps={{
          children: 'Label',
          required: true,
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
