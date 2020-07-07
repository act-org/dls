/**
 * @prettier
 */

import * as React from 'react';
import { CssBaseline, CssBaselineProps } from '@material-ui/core';

export type Props = CssBaselineProps;

const CssBaselineBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <CssBaseline {...props} />;

export default CssBaselineBase;
