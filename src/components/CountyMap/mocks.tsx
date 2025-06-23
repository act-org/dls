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
    CONVERSION_QUANTITY: 547,
    COUNTY_NAME: 'Nassau',
    FIPS: '36059',
    QUANTITY: 883,
    STATE_CODE: 'NY',
  },
  {
    CONVERSION_QUANTITY: 457,
    COUNTY_NAME: 'Suffolk',
    FIPS: '36103',
    QUANTITY: 761,
    STATE_CODE: 'NY',
  },
  {
    CONVERSION_QUANTITY: 301,
    COUNTY_NAME: 'Westchester',
    FIPS: '36119',
    QUANTITY: 689,
    STATE_CODE: 'NY',
  },
  {
    CONVERSION_QUANTITY: 316,
    COUNTY_NAME: 'Bergen',
    FIPS: '34003',
    QUANTITY: 567,
    STATE_CODE: 'NJ',
  },
  {
    CONVERSION_QUANTITY: 281,
    COUNTY_NAME: 'Capitol',
    FIPS: '09110',
    QUANTITY: 538,
    STATE_CODE: 'CT',
  },
  {
    CONVERSION_QUANTITY: 27,
    COUNTY_NAME: 'Bronx',
    FIPS: '36005',
    QUANTITY: 400,
    STATE_CODE: 'NY',
  },
  {
    CONVERSION_QUANTITY: 72,
    COUNTY_NAME: 'Queens',
    FIPS: '36081',
    QUANTITY: 276,
    STATE_CODE: 'NY',
  },
  {
    CONVERSION_QUANTITY: 112,
    COUNTY_NAME: 'Dutchess',
    FIPS: '36027',
    QUANTITY: 260,
    STATE_CODE: 'NY',
  },
  {
    CONVERSION_QUANTITY: 156,
    COUNTY_NAME: 'Monmouth',
    FIPS: '34025',
    QUANTITY: 258,
    STATE_CODE: 'NJ',
  },
  {
    CONVERSION_QUANTITY: 48,
    COUNTY_NAME: 'Kings',
    FIPS: '36047',
    QUANTITY: 254,
    STATE_CODE: 'NY',
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
    (acc: MappedFeaturesProps, { COUNTY_NAME, QUANTITY, STATE_CODE }) => {
      acc[COUNTY_NAME as string] = {
        quantity: QUANTITY as number,
        stateCode: STATE_CODE as string,
      };
      return acc;
    },
    {},
  );

  return {
    features: features.map(f => {
      if (f.properties?.NAME && mappedFeatures[f.properties.NAME]) {
        const quantity =
          f.properties?.NAME && mappedFeatures[f.properties.NAME]
            ? scale(mappedFeatures[f.properties.NAME].quantity)
            : 0;

        const properties = {
          ...f.properties,
          quantity,
          stateCode: mappedFeatures[f.properties.NAME].stateCode,
          value:
            f.properties?.NAME && mappedFeatures[f.properties.NAME]
              ? mappedFeatures[f.properties.NAME].quantity
              : 0,
        };

        return { ...f, properties };
      }

      return { ...f };
    }),
    type: 'FeatureCollection',
  };
};
