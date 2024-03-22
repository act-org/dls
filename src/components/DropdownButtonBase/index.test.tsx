import { standard } from '~/helpers/test';

import { DropdownButtonBase } from '.';

const defaultProps = {
  id: 'my-button',
  title: 'My Button',
  value: 'Filled value'
}

describe('DropdownButtonBase with value', () => {
  standard(<DropdownButtonBase {...defaultProps} />);
});

describe('DropdownButtonBase empty', () => {
  standard(<DropdownButtonBase {...defaultProps} value="" />);
});

describe('DropdownButtonBase with error', () => {
  standard(<DropdownButtonBase {...defaultProps} shouldRenderErrorState />);
});

describe('DropdownButtonBase disabled', () => {
  standard(<DropdownButtonBase {...defaultProps} disabled />);
});
