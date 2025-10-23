/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isFunction from 'lodash/isFunction';

import { ScatterPlotData } from '~/types';

import { Y_LABEL_MARGIN, calculateLabelWidth } from './CustomizedLabel';
import {
  CustomDomain,
  ICoordinate,
  IGroupDataPoint,
  ILabelPositionInfo,
  IMinMaxData,
  IOffsets,
  IPixelConversions,
  IScatterDomain,
} from './types';

function extractSimpleInfo(dataPoint: IGroupDataPoint): ScatterPlotData {
  return {
    label: dataPoint.label,
    x: dataPoint.x,
    y: dataPoint.y,
  };
}

/**
 * Merged two data points. Joins the two labels separated by a comma, takes the weighted average of the coordinates based on groupSize,
 * then updates the groupsize.
 */
function joinTwoPoints(pointA: IGroupDataPoint, pointB: IGroupDataPoint): IGroupDataPoint {
  const aMembers = pointA.members.length ? pointA.members : [extractSimpleInfo(pointA)];
  const bMembers = pointB.members.length ? pointB.members : [extractSimpleInfo(pointB)];
  return {
    groupSize: aMembers.length + bMembers.length,
    label: `${pointA.label}, ${pointB.label}`,
    members: [...aMembers, ...bMembers],
    x: (pointA.x * pointA.groupSize + pointB.x * pointB.groupSize) / (pointA.groupSize + pointB.groupSize),
    y: (pointA.y * pointA.groupSize + pointB.y * pointB.groupSize) / (pointA.groupSize + pointB.groupSize),
  };
}

export function calculateRadius(groupSize?: number): number {
  return 10 * Math.sqrt(groupSize || 1);
}

/**
 * Compares if two data points should merge. The calculation is based on the sum of their radii,
 * when multiplied by the pixel conversion. Since the radii are in pixel, but the points are described
 * as their X and Y data values, their actual pixel distances must be converted to be able to be compared.
 */
function shouldPointsConverge(
  pointA: IGroupDataPoint,
  pointB: IGroupDataPoint,
  pxConversionDimensions: IPixelConversions,
): boolean {
  const radialSum = calculateRadius(pointA.groupSize) + calculateRadius(pointB.groupSize) * 1.1;
  return (
    Math.abs(pointA.x - pointB.x) < pxConversionDimensions.x * radialSum &&
    Math.abs(pointA.y - pointB.y) < pxConversionDimensions.y * radialSum
  );
}

/**
 * Iterates through the data points and merges them if they are within a specified distance of each other.
 */
export function buildDataPoints(
  data: Array<ScatterPlotData>,
  pxConversionDimensions: IPixelConversions,
): IGroupDataPoint[] {
  if (!data?.length) {
    return [];
  }

  const currData: IGroupDataPoint[] = data.map(el => ({
    ...el,
    groupSize: 1,
    members: [],
  }));

  let shouldLoop = true;
  // eslint-disable-next-line no-loops/no-loops
  while (shouldLoop) {
    shouldLoop = false;
    // eslint-disable-next-line no-loops/no-loops
    for (let i = 0; i < currData.length - 1; i += 1) {
      const pointA = currData[i];
      let foundOne = false;
      // eslint-disable-next-line no-loops/no-loops
      for (let j = i + 1; j < currData.length; j += 1) {
        const pointB = currData[j];
        if (shouldPointsConverge(pointA, pointB, pxConversionDimensions)) {
          currData.splice(j, 1, joinTwoPoints(pointA, pointB));
          currData.splice(i, 1);
          shouldLoop = true;
          foundOne = true;
          break;
        }
      }
      if (foundOne) {
        break;
      }
    }
  }
  return currData;
}

function checkIfLabelsOverlap(labelA: ILabelPositionInfo, labelB: ILabelPositionInfo): boolean {
  if (labelA.label === labelB.label) {
    return false;
  }

  if (
    // X overlap
    ((labelB.x > labelA.x && labelB.x < labelA.x + labelA.width) ||
      (labelA.x > labelB.x && labelA.x < labelB.x + labelB.width)) &&
    // Y overlap
    Math.abs(labelA.y - labelB.y) < Y_LABEL_MARGIN
  ) {
    return true;
  }
  return false;
}

/**
 * Calculates where each label will appear for each data point, as well as its width in pixels.
 * Returns an array.
 */
function getLabelCoordinates(data: IGroupDataPoint[], pxConversionDimensions: IPixelConversions): ILabelPositionInfo[] {
  return data.map(el => {
    const width = calculateLabelWidth(el.label);
    const radius = calculateRadius(el.groupSize);
    return {
      label: el.label,
      width,
      x: el.x / pxConversionDimensions.x - width / 2,
      y: el.y / pxConversionDimensions.y - radius - Y_LABEL_MARGIN,
    };
  });
}

/**
 * Returns if any data labels should be hidden. First, it calculates where the labels are approx. going to
 * appear, then returns marks them as set up to be hidden.
 *
 * Return an object with the data point labels as keys, and a boolean. True if it should be hidden,
 * False if it should not.
 *
 * pxConversionDimension is the ratio between the data domain, and the panel width in pixel.
 * Since we only have each datapoint's X and Y data value, we use the conversion dimensions to
 * calculate where in the panel (in actual pixel coordinates) the datapoints are.
 */
export function evaluateLabels(
  data: IGroupDataPoint[],
  pxConversionDimensions: IPixelConversions,
): Record<string, boolean> {
  const labelCoordinates = getLabelCoordinates(data, pxConversionDimensions);

  return labelCoordinates.reduce((acc: Record<string, boolean>, el) => {
    if (
      labelCoordinates.find(el2 => {
        return !acc[el2.label] && checkIfLabelsOverlap(el, el2);
      })
    ) {
      return {
        ...acc,
        [el.label]: true,
      };
    }
    return {
      ...acc,
      [el.label]: false,
    };
  }, {});
}

/**
 * Returns data min and max for x and y axis.
 */
export function getMinMax(data: Array<ScatterPlotData>): IMinMaxData {
  const xArray = data.map(d => d.x);
  const yArray = data.map(d => d.y);
  const xMin = Math.min(...xArray);
  const xMax = Math.max(...xArray);
  const yMin = Math.min(...yArray);
  const yMax = Math.max(...yArray);

  return { xMax, xMin, yMax, yMin };
}

/**
 * This function calculates domain based on the data, but adds a bit of bleed to each side.
 * It will mainly be used if no domain prop is specified, or when zooming.
 */
export function getDomain(data: Array<ScatterPlotData>, [maxXSpread, maxYSpread]: [number, number]): IScatterDomain {
  const { xMin, xMax, yMin, yMax } = getMinMax(data);

  const xBleed = Math.min((xMax - xMin) * 0.1, maxXSpread * 0.05);
  const yBleed = Math.min((yMax - yMin) * 0.1, maxYSpread * 0.05);

  return {
    x: [Math.round((xMin - xBleed) * 100) / 100, Math.round((xMax + xBleed) * 100) / 100],
    y: [Math.round((yMin - yBleed) * 100) / 100, Math.round((yMax + yBleed) * 100) / 100],
  };
}

/**
 * This function handles the domain should it come from the Component's props
 */
export function consolidateDomain(domain: CustomDomain, data: ScatterPlotData[], isY?: boolean): [number, number] {
  if (!isFunction(domain)) {
    return domain;
  }
  const minMax = getMinMax(data);

  if (isY) {
    if (isFunction(domain)) {
      return domain([minMax.yMin, minMax.yMax]);
    }
    return [minMax.yMin, minMax.yMax];
  }
  if (isFunction(domain)) {
    return domain([minMax.xMin, minMax.xMax]);
  }
  return [minMax.xMin, minMax.xMax];
}

export function fixDecimal(num: number, decimals: number): number {
  return Math.floor(num * 10 ** decimals) / 10 ** decimals;
}

/**
 * Find new domain based on zoom. Finds the amount the domains should shift based on zoom amount and current domain
 * values - but also hard stops the zoom from going beyond a certain domain limit.
 *
 * This stops the chart from zooming out past the point of initial zoom, or zooming in past the boundaries of the current
 * zoom.
 */
export function calculateDomainAfterZoom(
  currDomain: IScatterDomain,
  zoomAmount: number,
  limitDomain: IScatterDomain,
  clientX: number,
  clientY: number,
  pxConversionDimensions: IPixelConversions,
  plotHeight: number,
  plotWidth: number,
  offsets: IOffsets = { bottom: 0, left: 0, right: 0, top: 0 },
): IScatterDomain {
  // Get X and Y into the constraints of the chart
  const boundedX = Math.min(Math.max(clientX, offsets.left), plotWidth + offsets.left);
  const boundedY = Math.min(Math.max(clientY, offsets.top), plotHeight + offsets.top);
  // Get the datapoint value for X and Y from the X and Y position of the on-element event
  const x = (boundedX - offsets.left) * pxConversionDimensions.x + currDomain.x[0];
  const y = (plotHeight - (boundedY - offsets.top)) * pxConversionDimensions.y + currDomain.y[0];

  // Find the change for each coordinate based on the distance between the calculated X and Y
  // and the domain edges
  const spanRight = Math.abs(x - currDomain.x[1]) * (1 - zoomAmount);
  const spanLeft = Math.abs(x - currDomain.x[0]) * (1 - zoomAmount);
  const spanUp = Math.abs(y - currDomain.y[1]) * (1 - zoomAmount);
  const spanDown = Math.abs(y - currDomain.y[0]) * (1 - zoomAmount);

  // Don't let the zoom in break the barriers outside of the domain limit.
  const newXDomain = [Math.max(limitDomain.x[0], x - spanLeft), Math.min(limitDomain.x[1], x + spanRight)];
  const newYDomain = [Math.max(limitDomain.y[0], y - spanDown), Math.min(limitDomain.y[1], y + spanUp)];

  return {
    x: newXDomain as [number, number],
    y: newYDomain as [number, number],
  };
}

export function filterDataByDomain(data: ScatterPlotData[], domain: IScatterDomain): ScatterPlotData[] {
  return data.filter(d => d.x >= domain.x[0] && d.x <= domain.x[1] && d.y >= domain.y[0] && d.y <= domain.y[1]);
}

export function dragDomain(
  dragAnchor: ICoordinate,
  newCoordinate: ICoordinate,
  currDomain: IScatterDomain,
  initialDomain: IScatterDomain,
): IScatterDomain {
  const deltaX = dragAnchor[0] - newCoordinate[0];
  const deltaY = dragAnchor[1] - newCoordinate[1];

  const shouldShiftX =
    (deltaX > 0 && currDomain.x[1] !== initialDomain.x[1]) || (deltaX < 0 && currDomain.x[0] !== initialDomain.x[0]);

  const shouldShiftY =
    (deltaY > 0 && currDomain.y[1] !== initialDomain.y[1]) || (deltaY < 0 && currDomain.y[0] !== initialDomain.y[0]);

  const newDomain = {
    x: shouldShiftX
      ? ([
          Math.max(currDomain.x[0] + deltaX, initialDomain.x[0]),
          Math.min(currDomain.x[1] + deltaX, initialDomain.x[1]),
        ] as ICoordinate)
      : currDomain.x,
    y: shouldShiftY
      ? ([
          Math.max(currDomain.y[0] + deltaY, initialDomain.y[0]),
          Math.min(currDomain.y[1] + deltaY, initialDomain.y[1]),
        ] as ICoordinate)
      : currDomain.y,
  };
  return newDomain;
}
