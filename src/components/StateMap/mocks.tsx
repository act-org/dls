/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { range } from 'd3-array';
import { scaleQuantile } from 'd3-scale';

import { IMapDataProps } from '~/types';

interface MappedFeaturesValueProps {
  quantity: number;
  stateCode: string;
}

interface MappedFeaturesProps {
  [key: string]: MappedFeaturesValueProps;
}

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
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 200,
    STATE_CODE: 'AL',
    STATE_NAME: 'Alabama',
  },
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 30,
    STATE_CODE: 'SC',
    STATE_NAME: 'South Carolina',
  },
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 800,
    STATE_CODE: 'FL',
    STATE_NAME: 'Florida',
  },
  {
    CONVERSION_QUANTITY: 0,
    QUANTITY: 500,
    STATE_CODE: 'TX',
    STATE_NAME: 'Texas',
  },
];

export const defaultProcessDataFn = (
  featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  data: Array<IMapDataProps>,
): GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
  const { features } = featureCollection;

  const scale = scaleQuantile()
    .domain(data.map(item => item.QUANTITY as number))
    .range(range(10) as Iterable<number>);

  const mappedFeatures = data.reduce(
    (acc: MappedFeaturesProps, { QUANTITY, STATE_NAME, STATE_CODE }) => {
      acc[STATE_NAME as string] = {
        quantity: QUANTITY as number,
        stateCode: STATE_CODE as string,
      };
      return acc;
    },
    {},
  );

  return {
    features: features.map(f => {
      if (f.properties?.name && mappedFeatures[f.properties.name]) {
        const quantity =
          f.properties?.name && mappedFeatures[f.properties.name]
            ? scale(mappedFeatures[f.properties.name].quantity)
            : 0;

        const properties = {
          ...f.properties,
          quantity,
          stateCode: mappedFeatures[f.properties.name].stateCode,
          value:
            f.properties?.name && mappedFeatures[f.properties.name]
              ? mappedFeatures[f.properties.name].quantity
              : 0,
        };

        return { ...f, properties };
      }

      return { ...f };
    }),
    type: 'FeatureCollection',
  };
};
