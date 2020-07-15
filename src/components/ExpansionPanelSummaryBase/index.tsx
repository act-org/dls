/**
 * @prettier
 */

import * as React from 'react';
import {
  ExpansionPanelSummary,
  ExpansionPanelSummaryProps,
} from '@material-ui/core';

export type Props = ExpansionPanelSummaryProps;

const ExpansionPanelSummaryBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ExpansionPanelSummary {...props} />;

export default ExpansionPanelSummaryBase;
