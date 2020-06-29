/**
 * @prettier
 */

import * as React from 'react';

import ButtonBase from '~/components/ButtonBase';
import GridContainer from '~/components/GridContainer';
import GridItem from '~/components/GridItem';
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
        <GridContainer>
          {actions.map(
            (action): React.ReactElement<any> => (
              <GridItem
                classes={{
                  item: classes.gridItemAction,
                }}
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
              </GridItem>
            ),
          )}
        </GridContainer>
      )}

      {actions.length === 0 && 'N/A'}
    </>
  );
};

export default RenderActions;
