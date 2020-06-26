/**
 * @prettier
 */

import * as React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import getIcon from '~/helpers/getIcon';

import type { Thing } from '../types';

import useStyles from './styles';

interface Props {
  thing: Thing;
}

const RenderActions: React.FC<Props> = ({
  thing,
}: Props): React.ReactElement<any> => {
  const actions = [
    {
      Icon: getIcon('general.download'),
      label: 'Download',
      onClick: (e: any): void => {
        e.preventDefault();
        e.stopPropagation();

        console.log(thing);
      },
    },
    {
      Icon: getIcon('general.refresh'),
      label: 'Regenerate',
      onClick: (e: any): void => {
        e.preventDefault();
        e.stopPropagation();

        console.log(thing);
      },
    },
  ];

  const classes = useStyles();

  return (
    <>
      {actions.length > 0 && (
        <Grid container>
          {actions.map(
            (action): React.ReactElement<any> => (
              <Grid
                classes={{
                  item: classes.gridItemAction,
                }}
                item
                key={action.label}
              >
                <Button
                  classes={{
                    root: classes.buttonRoot,
                  }}
                  onClick={action.onClick}
                  variant="outlined"
                >
                  <action.Icon fontSize="small" />
                  &nbsp;&nbsp;
                  <Typography
                    classes={{
                      root: classes.typographyRoot,
                    }}
                    variant="body1"
                  >
                    {action.label}
                  </Typography>
                </Button>
              </Grid>
            ),
          )}
        </Grid>
      )}

      {actions.length === 0 && 'N/A'}
    </>
  );
};

export default RenderActions;
