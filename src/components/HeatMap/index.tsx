/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { useTheme } from '@mui/material/styles';
import Color from 'color';
import React from 'react';
import {
  CircleLayer,
  HeatmapLayer,
  Layer,
  ViewStateChangeEvent,
} from 'react-map-gl/dist/es5';

import Map, { FeatureHoverProps, MapProps } from '~/components/Map';
import MapPopup, { MapPopupProps } from '~/components/MapPopup';

import type GeoJSON from 'geojson';

const MIN_ZOOM = 12;

export interface HeatMapProps {
  data?: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  mapboxAccessToken: string;
  mapPopupProps?: Omit<MapPopupProps, 'popupProps'>;
  mapProps?: Omit<MapProps, 'mapboxAccessToken'>;
  onHoverInfo?: FeatureHoverProps;
  setOnHoverInfo?: (newHoverInfo: FeatureHoverProps | undefined) => void;
  sourceId?: string;
  tooltipElement?: React.ReactElement;
}

/**
 * HeatMap component which under the hood uses mapbox and react-map-gl. For this to work it's necessary
 * to add the link bellow in the head of your page: <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
 * For more information: https://visgl.github.io/react-map-gl/docs/get-started/get-started#styling
 */
export const HeatMap: React.FC<HeatMapProps> = ({
  data,
  mapboxAccessToken,
  mapPopupProps,
  mapProps,
  onHoverInfo,
  setOnHoverInfo,
  sourceId = 'heatmap',
  tooltipElement,
}): React.ReactElement<HeatMapProps> => {
  const { palette } = useTheme();

  const [hoverInfo, setHoverInfo] = React.useState<FeatureHoverProps>();
  const [lastZoom, setLastZoom] = React.useState<number>();
  const finalHoverInfo = onHoverInfo || hoverInfo;
  const setFinalOnHoverInfo = setOnHoverInfo || setHoverInfo;

  const heatMapDataLayer = React.useMemo((): HeatmapLayer => {
    return {
      id: 'data',
      maxzoom: 16,
      paint: {
        'heatmap-intensity': {
          stops: [
            [5, 1],
            [10, 2],
            [12, 3],
          ],
        },
        'heatmap-opacity': {
          default: 1,
          stops: [
            [12, 1],
            [13, 0],
          ],
        },
        'heatmap-radius': {
          stops: [
            [5, 3.5],
            [7, 8],
            [9, 12],
            [12, 20],
          ],
        },
        'heatmap-weight': {
          property: 'value',
          stops: [
            [1, 0],
            [50, 0.5],
            [100, 1],
          ],
          type: 'exponential',
        },
      },
      type: 'heatmap',
    };
  }, []);

  const circleDataLayer = React.useMemo((): CircleLayer => {
    return {
      id: 'circle-data',
      minzoom: MIN_ZOOM,
      paint: {
        'circle-color': {
          default: Color(palette.secondary.main).fade(1).rgb().string(),
          property: 'quantity',
          stops: [
            [0, Color(palette.secondary.main).fade(0.9).rgb().string()],
            [1, Color(palette.secondary.main).fade(0.8).rgb().string()],
            [2, Color(palette.secondary.main).fade(0.7).rgb().string()],
            [3, Color(palette.secondary.main).fade(0.6).rgb().string()],
            [4, Color(palette.secondary.main).fade(0.5).rgb().string()],
            [5, Color(palette.secondary.main).fade(0.4).rgb().string()],
            [6, Color(palette.secondary.main).fade(0.3).rgb().string()],
            [7, Color(palette.secondary.main).fade(0.2).rgb().string()],
            [8, Color(palette.secondary.main).fade(0.1).rgb().string()],
            [9, Color(palette.secondary.main).fade(0).rgb().string()],
          ],
        },
        'circle-opacity': {
          stops: [
            [12, 0],
            [13, 1],
          ],
        },
        'circle-radius': {
          property: 'quantity',
          stops: [
            [{ value: 1, zoom: 15 }, 5],
            [{ value: 62, zoom: 15 }, 10],
            [{ value: 1, zoom: 22 }, 20],
            [{ value: 62, zoom: 22 }, 50],
          ],
          type: 'exponential',
        },
        'circle-stroke-color': 'white',
        'circle-stroke-width': 1,
      },
      type: 'circle',
    };
  }, [palette.secondary.main]);

  const onZoom = (event: ViewStateChangeEvent): void => {
    setLastZoom(event.viewState.zoom);
  };

  const parentHeight = mapProps?.height || 450;
  const parentWidth = mapProps?.width || '100%';

  return (
    <Map
      data={data}
      height={parentHeight}
      layerProps={heatMapDataLayer}
      layers={[<Layer key="circle-layer" {...circleDataLayer} />]}
      mapboxAccessToken={mapboxAccessToken}
      onClick={undefined}
      onZoom={onZoom}
      onZoomEnd={undefined}
      setHoverInfo={
        lastZoom && lastZoom >= MIN_ZOOM ? setFinalOnHoverInfo : undefined
      }
      sourceId={sourceId}
      width={parentWidth}
      {...mapProps}
    >
      {tooltipElement ||
        (finalHoverInfo && lastZoom && lastZoom >= MIN_ZOOM ? (
          <MapPopup
            popupProps={{
              latitude: finalHoverInfo.lat,
              longitude: finalHoverInfo.lng,
            }}
            rows={[
              {
                title: 'ZIP Code',
                value: finalHoverInfo.feature.properties?.zip as string,
              },
              {
                title: 'Volume',
                value: finalHoverInfo.feature.properties?.value as string,
              },
            ]}
            {...mapPopupProps}
          />
        ) : undefined)}
    </Map>
  );
};

HeatMap.defaultProps = {
  data: undefined,
  mapPopupProps: undefined,
  mapProps: undefined,
  onHoverInfo: undefined,
  setOnHoverInfo: undefined,
  sourceId: undefined,
  tooltipElement: undefined,
};

export default HeatMap;
