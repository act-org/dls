/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { IMapDataProps } from '~/types';

export const defaultData = [
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 80,
    STATE_CODE: 'TN',
    STATE_NAME: 'Tennessee',
  },
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 130,
    STATE_CODE: 'MD',
    STATE_NAME: 'Maryland',
  },
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 185,
    STATE_CODE: 'KY',
    STATE_NAME: 'Kentucky',
  },
];

interface MappedFeaturesValueProps {
  quantity: number;
  stateCode: string;
}

interface MappedFeaturesProps {
  [key: string]: MappedFeaturesValueProps;
}

export const defaultProcessDataFn = (
  featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  data: Array<IMapDataProps>,
): GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
  const { features } = featureCollection;

  const scale = scaleQuantile()
    .domain(data.map(item => item.SOURCE_COUNT1 as number))
    .range(range(10) as Iterable<number>);

  const mappedFeatures = data.reduce(
    (acc: MappedFeaturesProps, { SOURCE_COUNT1, EPS_CODE, STATE_CODE }) => {
      acc[EPS_CODE as string] = {
        quantity: SOURCE_COUNT1 as number,
        stateCode: STATE_CODE as string,
      };
      return acc;
    },
    {},
  );

  return {
    features: features.map(f => {
      if (f.id && mappedFeatures[f.id]) {
        const properties = {
          ...f.properties,
          quantity: scale(mappedFeatures[f.id].quantity),
          stateCode: mappedFeatures[f.id].stateCode,
          value: mappedFeatures[f.id].quantity,
        };

        return { ...f, properties };
      }

      return { ...f };
    }),
    type: 'FeatureCollection',
  };
};
