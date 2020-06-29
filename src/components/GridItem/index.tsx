/**
 * @prettier
 */

import * as React from 'react';

import GridBase, { Props as GridBaseProps } from '~/components/GridBase';

export type Props = GridBaseProps;

const GridItem: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <GridBase item {...props} />
);

export default GridItem;
