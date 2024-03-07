import { standard } from '~/helpers/test';

import { WithLabel } from '.';

const titleRowProps = {
  children: <div>Test</div>,
};

describe('WithLabel', () => {
  standard(<WithLabel {...titleRowProps} />);
});

describe('WithLabel required', () => {
  standard(<WithLabel {...titleRowProps} required />);
});

describe('WithLabel no Colon', () => {
  standard(<WithLabel {...titleRowProps} removeColon />);
});
