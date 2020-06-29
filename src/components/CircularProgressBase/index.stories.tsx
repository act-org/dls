/**
 * @prettier
 */

import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import CircularProgressBase from '.';

export const Base = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState(0);

  React.useEffect((): (() => any) => {
    const interval = setInterval((): void => {
      setValue((v): number => (v >= 100 ? 0 : v + 1));
    }, 100);

    return (): any => clearInterval(interval);
  }, []);

  return (
    <CircularProgressBase
      size={Number(text('Size', '24'))}
      thickness={Number(text('Thickness', '4.5'))}
      value={value}
      variant={select(
        'Variant',
        {
          Determinate: 'determinate',
          Indeterminate: 'indeterminate',
          Static: 'static',
        },
        'indeterminate',
      )}
    />
  );
};

export default {
  component: CircularProgressBase,
  parameters: {
    info: {
      text: 'This is the base variant of the CircularProgress component.',
    },
  },
  title: 'Atoms/CircularProgress',
};
