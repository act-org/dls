/**
 * @prettier
 */

import * as React from 'react';

import LinkBase, { Props as LinkBaseProps } from '~/components/LinkBase';

import useStyles from './styles';

export type Props = LinkBaseProps;

const LinkText: React.FC<Props> = (props: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return <LinkBase className={classes.linkBase} {...props} />;
};

export default LinkText;
