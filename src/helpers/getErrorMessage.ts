/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { get } from 'lodash';

export const getErrorMessage = (err: unknown): string => {
  let errorMessage = '';
  const graphQlErrorMessage = get(err, 'networkError.result.errors[0].message');
  const standardErrorMessage = get(err, 'message');

  if (graphQlErrorMessage) {
    errorMessage = graphQlErrorMessage;
  } else if (standardErrorMessage) {
    errorMessage = standardErrorMessage;
  }

  return errorMessage.trim();
};

export default getErrorMessage;
