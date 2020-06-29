/**
 * @prettier
 */

import * as React from 'react';

import GridBase, { Props as GridBaseProps } from '~/components/GridBase';

export type Props = GridBaseProps;

const GridContainer: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <GridBase container {...props} />;

export default GridContainer;
