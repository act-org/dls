/**
 * @prettier
 */

import * as React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

interface FormInput {
  formInput: React.ReactElement<any>;
  key: string;
}

type FormInputGroup = FormInput[];

export interface Props {
  groups: FormInputGroup[];
}

const FormInputGroupsPrimary: React.FC<Props> = ({ groups }: Props) => {
  const classes = useStyles();

  return (
    <>
      {/* eslint-disable react/no-array-index-key */}
      {groups.map(
        (group, i): React.ReactElement<any> => (
          <Grid
            classes={{
              container: classes.gridContainerRoot,
            }}
            container
            key={i}
            spacing={4}
          >
            {group.map(
              (input): React.ReactElement<any> => (
                <Grid
                  classes={{
                    item: classes.gridItemRoot,
                  }}
                  item
                  key={input.key}
                >
                  {input.formInput}
                </Grid>
              ),
            )}
          </Grid>
        ),
      )}
      {/* eslint-enable react/no-array-index-key */}
    </>
  );
};

export default FormInputGroupsPrimary;
