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

import { IMapDataProps } from '~/types';

export const defaultData = [
  {
    EPS_CODE: 'MS-01',
    EPS_NAME: 'Jackson',
    SOURCE_COUNT1: 37264,
    SOURCE_COUNT2: 47487,
    SOURCE_COUNT3: 49788,
    STATE_CODE: 'MS',
  },
  {
    EPS_CODE: 'FL-07',
    EPS_NAME: 'Collier, Hendry, & Monroe Co',
    SOURCE_COUNT1: 4382,
    SOURCE_COUNT2: 4687,
    SOURCE_COUNT3: 4226,
    STATE_CODE: 'FL',
  },
  {
    EPS_CODE: 'CA-32',
    EPS_NAME: 'Central Valley--North',
    SOURCE_COUNT1: 19812,
    SOURCE_COUNT2: 18554,
    SOURCE_COUNT3: 13355,
    STATE_CODE: 'CA',
  },
  {
    EPS_CODE: 'OH-03',
    EPS_NAME: 'City of Cleveland (West)',
    SOURCE_COUNT1: 7669,
    SOURCE_COUNT2: 8218,
    SOURCE_COUNT3: 7233,
    STATE_CODE: 'OH',
  },
  {
    EPS_CODE: 'IN-09',
    EPS_NAME: 'South Central Indiana',
    SOURCE_COUNT1: 6930,
    SOURCE_COUNT2: 6633,
    SOURCE_COUNT3: 5265,
    STATE_CODE: 'IN',
  },
  {
    EPS_CODE: 'NJ-09',
    EPS_NAME: 'Hudson Co',
    SOURCE_COUNT1: 5404,
    SOURCE_COUNT2: 5471,
    SOURCE_COUNT3: 4476,
    STATE_CODE: 'NJ',
  },
  {
    EPS_CODE: 'TN-01',
    EPS_NAME: 'Chattanooga',
    SOURCE_COUNT1: 16989,
    SOURCE_COUNT2: 22150,
    SOURCE_COUNT3: 15835,
    STATE_CODE: 'TN',
  },
  {
    EPS_CODE: 'NH-02',
    EPS_NAME: 'Merrimack Valley',
    SOURCE_COUNT1: 3246,
    SOURCE_COUNT2: 3234,
    SOURCE_COUNT3: 2280,
    STATE_CODE: 'NH',
  },
  {
    EPS_CODE: 'AL-02',
    EPS_NAME: 'Huntsville & Florence',
    SOURCE_COUNT1: 20490,
    SOURCE_COUNT2: 26773,
    SOURCE_COUNT3: 27957,
    STATE_CODE: 'AL',
  },
  {
    EPS_CODE: 'TX-17',
    EPS_NAME: 'City of Houston (East)',
    SOURCE_COUNT1: 11452,
    SOURCE_COUNT2: 11990,
    SOURCE_COUNT3: 9168,
    STATE_CODE: 'TX',
  },
  {
    EPS_CODE: 'TX-14',
    EPS_NAME: 'City of San Antonio',
    SOURCE_COUNT1: 7587,
    SOURCE_COUNT2: 9543,
    SOURCE_COUNT3: 8476,
    STATE_CODE: 'TX',
  },
  {
    EPS_CODE: 'PA-10',
    EPS_NAME: 'Southern Pennsylvania (East)',
    SOURCE_COUNT1: 11557,
    SOURCE_COUNT2: 10589,
    SOURCE_COUNT3: 9214,
    STATE_CODE: 'PA',
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
