/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { ThemeOptions } from '@material-ui/core/styles';

export type CustomThemeOptions = ThemeOptions & {
  customColors: {
    tertiary: {
      main: string;
    };
  };
  customDims: {
    heights: Record<string, number>;
  };
};

export type Size = 'default' | 'large';

export type SortDirection = 'ASCENDING' | 'DESCENDING';

export type SortObject = {
  sortBy: string;
  sortDirection: SortDirection;
};

export interface GraphQLError {
  extensions: {
    code: string;
    message: string;
    stackTrace?: string;
  };
  locations: {
    column: number;
    line: number;
  }[];
  message: string;
  path: string[];
}

export interface ServerError {
  extraInfo?: undefined | string;
  graphQLErrors?: [] | string[];
  message: string;
  networkError: {
    name: string;
    response: any;
    result: {
      errors: GraphQLError[];
    };
  };
}
