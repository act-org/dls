/**
 * @prettier
 */

import * as React from 'react';

import FormInputPrimary from '~/components/FormInputPrimary';

import FormInputGroupsPrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [value1, setValue1] = React.useState('Value 1');
  const [value2, setValue2] = React.useState('Value 2');
  const [value3, setValue3] = React.useState('Value 3');

  return (
    <FormInputGroupsPrimary
      groups={[
        [
          {
            formInput: (
              <FormInputPrimary
                inputProps={{
                  onChange: (e: any): void => {
                    setValue1(e.target.value);
                  },
                  placeholder: 'Input 1',
                  type: 'text',
                  value: value1,
                }}
                labelProps={{
                  children: 'Input 1',
                }}
                required
              />
            ),
            key: 'INPUT_1',
          },
          {
            formInput: (
              <FormInputPrimary
                inputProps={{
                  onChange: (e: any): void => {
                    setValue2(e.target.value);
                  },
                  placeholder: 'Input 2',
                  type: 'password',
                  value: value2,
                }}
                labelProps={{
                  children: 'Input 2',
                }}
                required
              />
            ),
            key: 'INPUT_2',
          },
        ],
        [
          {
            formInput: (
              <FormInputPrimary
                inputProps={{
                  onChange: (e: any): void => {
                    setValue3(e.target.value);
                  },
                  placeholder: 'Input 3',
                  type: 'text',
                  value: value3,
                }}
                labelProps={{
                  children: 'Input 3',
                }}
              />
            ),
            key: 'INPUT_3',
          },
        ],
      ]}
    />
  );
};

export default {
  component: FormInputGroupsPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the FormInputGroups component.',
    },
  },
  title: 'Organisms/FormInputGroups',
};
