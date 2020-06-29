/**
 * @prettier
 */

import * as React from 'react';

import PaperBase, { Props as PaperBaseProps } from '~/components/PaperBase';

import useStyles from './styles';

const Component: React.FC = (
  props: PaperBaseProps,
): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <PaperBase
      classes={{
        root: classes.paperRoot,
      }}
      elevation={0}
      {...props}
    />
  );
};

export default Component;
