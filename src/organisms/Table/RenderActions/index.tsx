/**
 * @prettier
 */

import * as React from 'react';
import { Grid } from '@material-ui/core';

import ButtonBase from '~/components/ButtonBase';
import TypographyBase from '~/components/TypographyBase';
import { CloudDownload, Sync } from '~/icons';

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
      Icon: CloudDownload,
      label: 'Download',
      onClick: (e: any): void => {
        e.preventDefault();
        e.stopPropagation();

        console.log(thing);
      },
    },
    {
      Icon: Sync,
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
                <ButtonBase
                  classes={{
                    root: classes.buttonRoot,
                  }}
                  onClick={action.onClick}
                  variant="outlined"
                >
                  <action.Icon fontSize="small" />
                  &nbsp;&nbsp;
                  <TypographyBase
                    classes={{
                      root: classes.typographyRoot,
                    }}
                    variant="body1"
                  >
                    {action.label}
                  </TypographyBase>
                </ButtonBase>
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
