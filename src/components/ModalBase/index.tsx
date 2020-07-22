/**
 * @prettier
 */

import * as React from 'react';
import { Modal, ModalProps } from '@material-ui/core';

export type Props = ModalProps;

const ModalBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Modal {...props} />
);

export default ModalBase;
