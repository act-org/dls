/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

interface FormInput {
  formInput: React.ReactElement<unknown>;
  key: string;
}

type FormInputGroup = FormInput[];

export interface FormInputGroupsProps {
  groups: FormInputGroup[];
}

export const FormInputGroups: React.FC<FormInputGroupsProps> = ({
  groups,
}: FormInputGroupsProps) => {
  const classes = useStyles();

  return (
    <>
      {/* eslint-disable react/no-array-index-key */}
      {groups.map(
        (group, i): React.ReactElement<unknown> => (
          <Grid
            classes={{
              container: classes.gridContainerRoot,
            }}
            container
            key={i}
            spacing={4}
          >
            {group.map(
              (input): React.ReactElement<unknown> => (
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

export default FormInputGroups;
