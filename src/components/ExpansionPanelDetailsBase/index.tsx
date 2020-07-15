/**
 * @prettier
 */

import * as React from 'react';
import { ExpansionPanel, ExpansionPanelProps } from '@material-ui/core';

export type Props = ExpansionPanelProps;

const ExpansionPanelDetailsBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ExpansionPanel {...props} />;

export default ExpansionPanelDetailsBase;
