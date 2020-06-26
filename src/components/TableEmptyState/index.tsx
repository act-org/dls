/**
 * @prettier
 */

import * as React from 'react';

import DIMS from '~/constants/dims';
import EmptyStatePrimary, {
  Props as EmptyStatePrimaryProps,
} from '~/components/EmptyStatePrimary';

const TableEmptyState: React.FC<EmptyStatePrimaryProps> = (
  props: EmptyStatePrimaryProps,
): React.ReactElement<any> => (
  <>
    <style jsx>
      {`
        .container {
          padding: ${DIMS.LAYOUT_PADDING * 2.5}px ${DIMS.LAYOUT_PADDING}px
            ${DIMS.LAYOUT_PADDING}px ${DIMS.LAYOUT_PADDING}px;
          width: 100%;
        }
      `}
    </style>

    <div className="container">
      <EmptyStatePrimary description="No Results Found" {...props} />
    </div>
  </>
);

export default TableEmptyState;
