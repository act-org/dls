/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useTheme } from '@mui/material/styles';
import bbox from '@turf/bbox';
import { isString } from 'lodash';
import numeral from 'numeral';
import React from 'react';

import Map, {
  MapProps,
  FeatureHoverProps,
  InitialBoundsPositionProps,
} from '~/components/Map';
import MapPopup, { MapPopupProps } from '~/components/MapPopup';
import { IMapDataProps } from '~/types';

import type GeoJSON from 'geojson';

export interface CountyMapProps {
  data: Array<IMapDataProps>;
  geoJSONPath: string;
  mapboxAccessToken: string;
  mapPopupProps?: Partial<MapPopupProps>;
  mapProps?: Omit<Partial<MapProps>, 'mapboxAccessToken'>;
  onHoverInfo?: FeatureHoverProps;
  processDataFn?: (
    featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
    data: Array<IMapDataProps>,
  ) => GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  selectedCounty?: Array<string>;
  setOnHoverInfo?: (newHoverInfo: FeatureHoverProps | undefined) => void;
  tooltipElement?: React.ReactElement;
}

/**
 * CountyMap component which under the hood uses mapbox and react-map-gl. For this to work it's necessary
 * to add the link bellow in the head of your page: <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
 * For more information: https://visgl.github.io/react-map-gl/docs/get-started/get-started#styling
 */
export const CountyMap: React.FC<CountyMapProps> = ({
  data,
  geoJSONPath,
  mapboxAccessToken,
  mapPopupProps,
  mapProps,
  onHoverInfo,
  processDataFn,
  selectedCounty,
  setOnHoverInfo,
  tooltipElement,
}): React.ReactElement<CountyMapProps> => {
  const { breakpoints, spacing } = useTheme();

  const [countiesJSON, setCountiesJSON] =
    React.useState<GeoJSON.FeatureCollection<GeoJSON.Geometry>>();
  const [hoverInfo, setHoverInfo] = React.useState<FeatureHoverProps>();
  const finalHoverInfo = onHoverInfo || hoverInfo;

  React.useEffect(() => {
    fetch(geoJSONPath)
      .then(resp => resp.json())
      .then(json =>
        setCountiesJSON(json as GeoJSON.FeatureCollection<GeoJSON.Geometry>),
      )
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
  }, []);

  const processedData = React.useMemo(() => {
    return countiesJSON && processDataFn && processDataFn(countiesJSON, data);
  }, [data, countiesJSON, processDataFn]);

  const initialBoundsPosition = React.useMemo(():
    | InitialBoundsPositionProps
    | undefined => {
    if (selectedCounty && processedData) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const features = processedData.features.filter(d =>
        selectedCounty.includes(
          `${d.properties?.STATE}${d.properties?.COUNTY}`,
        ),
      );

      if (features.length > 0) {
        const [minLng, minLat, maxLng, maxLat] = bbox({
          features,
          type: 'FeatureCollection',
        });

        return {
          id:
            features.length > 1
              ? undefined
              : (features[0].properties?.GEO_ID as string),
          position: [
            [minLng, minLat],
            [maxLng, maxLat],
          ],
        };
      }
    }

    return undefined;
  }, [processedData, selectedCounty]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!processedData) return <></>;

  const parentHeight = mapProps?.height || 450;
  const parentWidth = mapProps?.width || '100%';

  return (
    <Map
      data={processedData}
      height={parentHeight}
      initialBoundsPosition={initialBoundsPosition}
      mapboxAccessToken={mapboxAccessToken}
      setHoverInfo={setOnHoverInfo || setHoverInfo}
      sourceId="county"
      sourceProps={{ promoteId: 'GEO_ID', type: 'geojson' }}
      width={parentWidth}
      {...mapProps}
    >
      {tooltipElement ||
        (finalHoverInfo &&
        (isString(parentWidth) ||
          parentWidth > breakpoints.values.sm - parseInt(spacing(12), 10)) ? (
          <MapPopup
            popupProps={{
              latitude: finalHoverInfo.lat,
              longitude: finalHoverInfo.lng,
            }}
            rows={[
              {
                title: 'County',
                value: finalHoverInfo.feature.properties?.NAME as string,
              },
              {
                title: 'State',
                value: finalHoverInfo.feature.properties?.stateCode as string,
              },
              {
                title: 'FIPS',
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                value: `${finalHoverInfo.feature.properties?.STATE}${finalHoverInfo.feature.properties?.COUNTY}`,
              },
              {
                title: 'Volume',
                value: numeral(
                  finalHoverInfo.feature.properties?.value as number,
                ).format('0,0'),
              },
            ]}
            {...mapPopupProps}
          />
        ) : undefined)}
    </Map>
  );
};

export default CountyMap;
