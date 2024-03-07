/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { range } from 'd3-array';
import { scaleQuantile } from 'd3-scale';

interface MappedFeaturesValueProps {
  quantity: number;
  stateCode: string;
}

interface MappedFeaturesProps {
  [key: string]: MappedFeaturesValueProps;
}

export const defaultData = [
  {
    QUANTITY: 80,
    SCF_CODE: 148,
    SCF_NAME: 'NY - 148',
    STATE_CODE: 'NY',
  },
  {
    QUANTITY: 130,
    SCF_CODE: 157,
    SCF_NAME: 'PA - 157',
    STATE_CODE: 'PA',
  },
  {
    QUANTITY: 185,
    SCF_CODE: 287,
    SCF_NAME: 'NC - 287',
    STATE_CODE: 'NC',
  },
  {
    QUANTITY: 200,
    SCF_CODE: 286,
    SCF_NAME: 'NC - 286',
    STATE_CODE: 'NC',
  },
  {
    QUANTITY: 30,
    SCF_CODE: 295,
    SCF_NAME: 'SC - 295',
    STATE_CODE: 'SC',
  },
  {
    QUANTITY: 800,
    SCF_CODE: 96,
    SCF_NAME: 'AE - 096',
    STATE_CODE: 'AE',
  },
  {
    QUANTITY: 500,
    SCF_CODE: 148,
    SCF_NAME: 'NY - 148',
    STATE_CODE: 'NY',
  },
];

export const defaultProcessDataFn = (
  featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
): GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
  const { features } = featureCollection;

  const scale = scaleQuantile()
    .domain(defaultData.map(item => item.QUANTITY))
    .range(range(10) as Iterable<number>);

  const mappedFeatures = defaultData.reduce(
    (acc: MappedFeaturesProps, { QUANTITY, SCF_CODE, STATE_CODE }) => {
      acc[SCF_CODE] = { quantity: QUANTITY, stateCode: STATE_CODE };
      return acc;
    },
    {},
  );

  return {
    features: features.map(f => {
      if (f.properties?.id && mappedFeatures[f.properties.id]) {
        const quantity =
          f.properties?.id && mappedFeatures[f.properties.id]
            ? scale(mappedFeatures[f.properties.id].quantity)
            : 0;

        const properties = {
          ...f.properties,
          quantity,
          stateCode: mappedFeatures[f.properties.id].stateCode,
          value:
            f.properties?.id && mappedFeatures[f.properties.id]
              ? mappedFeatures[f.properties.id].quantity
              : 0,
        };

        return { ...f, properties };
      }

      return { ...f };
    }),
    type: 'FeatureCollection',
  };
};
