/**
 * @prettier
 */

import * as React from 'react';
import { Container, ContainerProps } from '@material-ui/core';

export type Props = ContainerProps;

const ContainerBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <Container {...props} />;

export default ContainerBase;
