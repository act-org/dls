/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import userEvent from '@testing-library/user-event';

import { standard, render } from '~/helpers/test';

import { SearchBar } from '.';

describe('SearchBar', () => {
  const Component = <SearchBar value="Value" />;
  standard(Component);

  it('should publish an onChange event when the clear icon is clicked', () => {
    const onChange = jest.fn();
    const rendered = render(
      <SearchBar onChange={onChange} value="Value" />,
      'ACT',
    );
    userEvent.click(rendered.getByTitle('Clears the search'));
    const htmlElement = rendered.getByRole('textbox') as HTMLInputElement;
    expect(htmlElement.value).toBe('');
    expect(onChange).toHaveBeenCalled();
  });
  it('should not publish an onChange event when no handler is present', () => {
    const rendered = render(<SearchBar value="Value" />, 'ACT');
    userEvent.click(rendered.getByTitle('Clears the search'));
    const htmlElement = rendered.getByRole('textbox') as HTMLInputElement;
    expect(htmlElement.value).toBe('');
  });
  it('should publish an onChange event when the text is updated', () => {
    const onChange = jest.fn();
    const rendered = render(
      <SearchBar onChange={onChange} value="Value" />,
      'ACT',
    );
    userEvent.type(rendered.getByRole('textbox'), '123');
    expect(onChange).toHaveBeenCalled();
    const htmlElement = rendered.getByRole('textbox') as HTMLInputElement;
    expect(htmlElement.value).toBe('Value123');
  });
  it('should not publish a change event when no handler is registered', () => {
    const rendered = render(<SearchBar value="Value" />, 'ACT');
    userEvent.type(rendered.getByRole('textbox'), '123');
    const htmlElement = rendered.getByRole('textbox') as HTMLInputElement;
    expect(htmlElement.value).toBe('Value123');
  });
  it('should have a default empty string value', () => {
    const rendered = render(<SearchBar />);
    const htmlElement = rendered.getByRole('textbox') as HTMLInputElement;
    expect(htmlElement.value).toBe('');
  });
});
