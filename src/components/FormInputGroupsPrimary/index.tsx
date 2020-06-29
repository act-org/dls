/**
 * @prettier
 */

import * as React from 'react';

import GridContainer from '~/components/GridContainer';
import GridItem from '~/components/GridItem';

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
          <GridContainer
            classes={{
              container: classes.gridContainerRoot,
            }}
            key={i}
            spacing={4}
          >
            {group.map(
              (input): React.ReactElement<any> => (
                <GridItem
                  classes={{
                    item: classes.gridItemRoot,
                  }}
                  item
                  key={input.key}
                >
                  {input.formInput}
                </GridItem>
              ),
            )}
          </GridContainer>
        ),
      )}
      {/* eslint-enable react/no-array-index-key */}
    </>
  );
};

export default FormInputGroupsPrimary;
