import { noop } from 'lodash';

import { standard } from '~/helpers/test';

import { Dropdown } from '.';

const defaultProps = {
  id: 'my-dropdown',
  onChange: noop,
  options: [{ label: 'Option A', value: 'A' }, { label: 'Option B', value: 'B' }],
  title: 'My Dropdown',
  value: null,
}

describe('Dropdown empty', () => {
  standard(<Dropdown {...defaultProps} />);
});

describe('Dropdown disabled', () => {
  standard(<Dropdown {...defaultProps} disabled />);
});

describe('Dropdown with value', () => {
  standard(<Dropdown {...defaultProps} value={{ label: 'Option B', value: 'B' }} />);
});

describe('Dropdown with no options', () => {
  standard(<Dropdown {...defaultProps} options={[]} />);
});

describe('Dropdown required', () => {
  standard(<Dropdown {...defaultProps} required />);
});

describe('Dropdown with error', () => {
  standard(<Dropdown {...defaultProps} error />);
});

describe('Dropdown with label', () => {
  standard(<Dropdown {...defaultProps} label="My Dropdown" />);
});
