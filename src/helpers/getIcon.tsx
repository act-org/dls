/**
 * @prettier
 */

import * as React from 'react';
import { constant } from 'lodash';
import {
  CloudDownload,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  Sync,
} from '@material-ui/icons';

const getIcon = (selector: string): React.FC<any> => {
  switch (selector) {
    case 'general.arrow.down':
      return KeyboardArrowDown;
    case 'general.arrow.left':
      return KeyboardArrowLeft;
    case 'general.arrow.right':
      return KeyboardArrowRight;
    case 'general.arrow.up':
      return KeyboardArrowUp;
    case 'general.download':
      return CloudDownload;
    case 'general.refresh':
      return Sync;
    default:
      return constant(<div>?</div>);
  }
};

export default getIcon;
