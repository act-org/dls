/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { grey } from '@mui/material/colors';
import { useTheme, useThemeProps } from '@mui/material/styles';
import bbox from '@turf/bbox';
import Color from 'color';
import { isString } from 'lodash';
import {
  FillLayerSpecification,
  GeoJSONFeature,
  LineLayerSpecification,
  ProjectionSpecification,
} from 'mapbox-gl';
import { equals } from 'ramda';
import React from 'react';
import {
  AttributionControl,
  AttributionControlProps,
  ControlPosition,
  FogSpecification,
  Layer,
  LayerProps,
  LngLatBoundsLike,
  Map as MapGL,
  MapMouseEvent,
  MapRef,
  MapProps as ReactMapGLProps,
  NavigationControl,
  NavigationControlProps,
  Source,
  SourceProps as SourceGLProps,
  TerrainSpecification,
  ViewStateChangeEvent,
} from 'react-map-gl/mapbox';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';

import { StyledAttibutionControlContainer } from './styles';

import type GeoJSON from 'geojson';

type MapGLProps = ReactMapGLProps & {
  logoPosition?: ControlPosition;
  fog?: FogSpecification;
  terrain?: TerrainSpecification;
};

type SourceProps = SourceGLProps & {
  data?:
    | GeoJSON.Feature<GeoJSON.Geometry>
    | GeoJSON.FeatureCollection<GeoJSON.Geometry>
    | string
    | undefined;
};

export interface InitialBoundsPositionProps {
  id?: string | number;
  position: LngLatBoundsLike;
}

export interface FeatureHoverProps {
  feature: GeoJSONFeature;
  lat: number;
  lng: number;
}

export type MapProps = MapGLProps & {
  attributionControlProps?: AttributionControlProps;
  children?: React.ReactElement;
  color?: string;
  data?:
    | GeoJSON.Feature<GeoJSON.Geometry>
    | GeoJSON.FeatureCollection<GeoJSON.Geometry>
    | string
    | undefined;
  height: number | string;
  initialBoundsPosition?: InitialBoundsPositionProps;
  layers?: Array<React.ReactElement<LayerProps>>;
  layerProps?: LayerProps;
  mapboxAccessToken: string;
  navigationControlProps?: NavigationControlProps;
  onMapClick?: (event: MapMouseEvent, mapRef: MapRef | null) => void;
  // eslint-disable-next-line react/boolean-prop-naming
  preserveDrawingBuffer?: boolean;
  projection?: ProjectionSpecification;
  setHoverInfo?: (value: FeatureHoverProps | undefined) => void;
  sourceId?: string;
  sourceProps?: SourceProps;
  width: number | string;
};

/**
 * Map component which under the hood uses mapbox and react-map-gl. For this to work it's necessary
 * to add the link bellow in the head of your page: <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
 * For more information: https://visgl.github.io/react-map-gl/docs/get-started/get-started#styling
 *
 * @note If sending the `data` prop it's also necessary to send the `sourceId` prop.
 */
export const Map: React.FC<MapProps> = (
  inProps: MapProps,
): React.ReactElement<MapProps> => {
  const {
    attributionControlProps,
    children,
    color = grey[700],
    data,
    height = 450,
    initialBoundsPosition,
    layers,
    layerProps,
    mapboxAccessToken,
    navigationControlProps,
    onMapClick,
    setHoverInfo,
    preserveDrawingBuffer = false,
    sourceId = 'areas',
    sourceProps,
    width = '100%',
    ...mapProps
  } = useThemeProps({ name: DLS_COMPONENT_NAMES.MAP, props: inProps });

  const { palette, spacing } = useTheme();

  const mapRef = React.useRef<MapRef | null>(null);
  const previousBounds = React.useRef<LngLatBoundsLike | undefined>(undefined);
  const [lastZoom, setLastZoom] = React.useState<number>();
  const [sourceLoaded, setSourceLoaded] = React.useState<boolean>(false);
  const [containerWidth, setContainerWidth] = React.useState<number | string>();
  const [containerHeight, setContainerHeight] = React.useState<
    number | string
  >();

  const dataLayer = React.useMemo((): LineLayerSpecification => {
    return {
      id: 'data',
      paint: {
        'line-border-color': [
          'case',
          ['boolean', ['feature-state', 'clicked'], false],
          Color(palette.common.black).fade(0).rgb().string(),
          Color(palette.grey[500]).fade(0.3).rgb().string(),
        ],
        'line-color': {
          default: Color(color).fade(1).rgb().string(),
          property: 'quantity',
          stops: [
            [0, Color(color).fade(0.9).rgb().string()],
            [1, Color(color).fade(0.8).rgb().string()],
            [2, Color(color).fade(0.7).rgb().string()],
            [3, Color(color).fade(0.6).rgb().string()],
            [4, Color(color).fade(0.5).rgb().string()],
            [5, Color(color).fade(0.4).rgb().string()],
            [6, Color(color).fade(0.3).rgb().string()],
            [7, Color(color).fade(0.2).rgb().string()],
            [8, Color(color).fade(0.1).rgb().string()],
            [9, Color(color).fade(0).rgb().string()],
          ],
        },
        'line-opacity': 0.7,
      },
      source: sourceId,
      type: 'line',
    };
  }, [color, palette.common.black, palette.grey, sourceId]);

  const fillLayer = React.useMemo((): FillLayerSpecification => {
    return {
      id: 'fillDataLayer',
      paint: {
        'fill-color': {
          default: Color(color).fade(1).rgb().string(),
          property: 'quantity',
          stops: [
            [0, Color(color).fade(0.9).rgb().string()],
            [1, Color(color).fade(0.8).rgb().string()],
            [2, Color(color).fade(0.7).rgb().string()],
            [3, Color(color).fade(0.6).rgb().string()],
            [4, Color(color).fade(0.5).rgb().string()],
            [5, Color(color).fade(0.4).rgb().string()],
            [6, Color(color).fade(0.3).rgb().string()],
            [7, Color(color).fade(0.2).rgb().string()],
            [8, Color(color).fade(0.1).rgb().string()],
            [9, Color(color).fade(0).rgb().string()],
          ],
        },
        'fill-opacity': 0.7,
      },
      source: sourceId,
      type: 'fill',
    };
  }, [color, sourceId]);

  const onHover = React.useCallback(
    (event: MapMouseEvent) => {
      if (setHoverInfo) {
        const {
          features,
          lngLat: { lng, lat },
        } = event;

        const hoveredFeature = features && features[0];

        if (hoveredFeature && hoveredFeature?.properties) {
          setHoverInfo({ feature: hoveredFeature, lat, lng });
        } else {
          setHoverInfo(undefined);
        }
      }
    },
    [setHoverInfo],
  );

  const mapRefCallback = React.useCallback(
    (ref: MapRef) => {
      if (ref) {
        mapRef.current = ref;
        if (
          initialBoundsPosition &&
          !equals(initialBoundsPosition.position, previousBounds.current)
        ) {
          ref.fitBounds(initialBoundsPosition.position, {
            duration: 1000,
            padding: 40,
          });
          previousBounds.current = initialBoundsPosition.position;
        }
      }
    },
    [initialBoundsPosition],
  );

  React.useEffect(() => {
    if (initialBoundsPosition?.id) {
      mapRef.current?.setFeatureState(
        { id: initialBoundsPosition.id, source: sourceId },
        { clicked: true },
      );
    }
  }, [initialBoundsPosition, sourceId, sourceLoaded]);

  const onClick = (event: MapMouseEvent): void => {
    const feature = event.features && event.features[0];

    if (feature && feature?.properties?.stateCode) {
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current?.removeFeatureState({ source: sourceId });

      mapRef.current?.setFeatureState(
        { id: feature.id || '', source: sourceId },
        { clicked: true },
      );

      mapRef.current?.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { duration: 1000, padding: 40 },
      );
    } else {
      mapRef.current?.removeFeatureState({ source: sourceId });
    }

    if (onMapClick) onMapClick(event, mapRef.current);
  };

  const onZoom = (event: ViewStateChangeEvent): void => {
    if (!lastZoom || lastZoom > event.viewState.zoom) {
      mapRef.current?.removeFeatureState({ source: sourceId });
    }
    setLastZoom(event.viewState.zoom);
  };

  const onResize = React.useCallback(() => {
    if (mapRef.current) {
      setTimeout(() => mapRef.current?.resize(), 0);
    }
    return null;
  }, []);

  const changeDimensions = (): void => {
    onResize();
    setContainerWidth(width);
    setContainerHeight(
      isString(height) ? height : height - parseInt(spacing(7.8), 10),
    );
  };

  React.useEffect(() => {
    changeDimensions();
  }, [width, height]);

  return (
    <StyledAttibutionControlContainer
      style={{ height: containerHeight, width: containerWidth }}
    >
      <MapGL
        attributionControl={false}
        initialViewState={{
          latitude: 37.0902,
          longitude: -95.7129,
          zoom: 3,
        }}
        interactiveLayerIds={data ? ['data'] : undefined}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onClick={onClick}
        onMouseLeave={
          setHoverInfo ? (): void => setHoverInfo(undefined) : undefined
        }
        onMouseMove={onHover}
        onRender={(): null => onResize()}
        onSourceData={(): void => {
          if (!sourceLoaded) setSourceLoaded(true);
        }}
        onZoomEnd={onZoom}
        preserveDrawingBuffer={preserveDrawingBuffer}
        ref={mapRefCallback}
        reuseMaps
        style={{ height: '100%', width: '100%' }}
        {...mapProps}
      >
        <AttributionControl
          style={{ color: 'white' }}
          {...attributionControlProps}
        />
        <NavigationControl
          position="top-right"
          style={{ marginRight: spacing(2.5) }}
          {...navigationControlProps}
        />
        {data && (
          <Source data={data} type="geojson" {...sourceProps} id={sourceId}>
            {/* Fix for TS complaining about the incompatibility of layerProps and dataLayer, even though
            dataLayer is one of the multiple types accepted by layerProps. */}
            {layerProps ? (
              <Layer {...layerProps} />
            ) : (
              <>
                <Layer {...dataLayer} />
                <Layer {...fillLayer} />
              </>
            )}
            {layers}
          </Source>
        )}

        {children}
      </MapGL>
    </StyledAttibutionControlContainer>
  );
};

export default Map;
