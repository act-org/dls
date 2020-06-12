/**
 * @prettier
 */

import * as React from 'react';

import Button from '.';

export default { title: 'Button' };

export const withText = (): React.ReactElement<any> => (
  <Button>Hello Button</Button>
);

export const withEmoji = (): React.ReactElement<any> => (
  <Button>
    <span aria-label="so cool" role="img">
      😀 😎 👍 💯
    </span>
  </Button>
);
