/**
 * @prettier
 */

import * as React from 'react';
import {
  ExpansionPanelDetails,
  ExpansionPanelDetailsProps,
} from '@material-ui/core';

export type Props = ExpansionPanelDetailsProps;

const ExpansionPanelDetailsBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ExpansionPanelDetails {...props} />;

export default ExpansionPanelDetailsBase;
