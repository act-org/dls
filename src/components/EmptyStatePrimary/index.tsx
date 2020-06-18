/**
 * @prettier
 */

import * as React from 'react';

import ButtonPrimary from '~/components/ButtonPrimary';
import EmptyStateBase, {
  Props as EmptyStateBaseProps,
} from '~/components/EmptyStateBase';

import useStyles from './styles';

export type Props = EmptyStateBaseProps;

const EmptyStatePrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return <EmptyStateBase Button={ButtonPrimary} classes={classes} {...props} />;
};

export default EmptyStatePrimary;
