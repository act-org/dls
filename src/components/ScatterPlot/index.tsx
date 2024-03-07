/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { debounce } from 'lodash';
import React, { MouseEventHandler } from 'react';
import {
  ReferenceLine,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  LabelList,
  ZAxisProps,
  CartesianGridProps,
  ResponsiveContainer,
  ResponsiveContainerProps,
  ScatterProps,
  ReferenceLineProps,
  ScatterChart,
  Label,
  LabelProps,
  Tooltip,
  TooltipProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import { CategoricalChartState } from 'recharts/types/chart/types';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import MagnifyMinusOutline from '~/icons/MagnifyMinusOutline';

import { ScatterPlotData } from '~/types';

import CustomizedCell from './CustomizedCell';
import CustomizedLabel from './CustomizedLabel';
import CustomTooltip from './CustomTooltip';
import {
  buildDataPoints,
  calculateDomainAfterZoom,
  consolidateDomain,
  dragDomain,
  evaluateLabels,
  filterDataByDomain,
  fixDecimal,
  getDomain,
  getMinMax,
} from './processing';
import RankSummary from './RankSummary';
import {
  IScatterDomain,
  CustomXAxisProps,
  CustomYAxisProps,
  IBuildDataOptions,
  IPlotDimensions,
  IScatterRefNode,
  IZoomOptions,
  ICoordinate,
} from './types';

export interface ScatterPlotProps {
  cartesianGridProps?: CartesianGridProps;
  chartProps?: CategoricalChartProps;
  children?: React.ReactElement<unknown>;
  data: Array<ScatterPlotData>;
  height?: number;
  hideSummary?: boolean;
  idSubstring?: string;
  responsiveContainerProps?: ResponsiveContainerProps;
  scatterProps?: ScatterProps;
  showAvarageLine?: boolean;
  tooltipProps?: TooltipProps<ValueType, NameType>;
  xAverageLineProps?: ReferenceLineProps;
  xAxisProps?: CustomXAxisProps;
  xLabelProps?: LabelProps;
  xLabelValue?: string;
  yAverageLineProps?: ReferenceLineProps;
  yAxisProps?: CustomYAxisProps;
  yLabelProps?: LabelProps;
  yLabelValue?: string;
  zAxisProps?: ZAxisProps;
  buildDataOptions?: IBuildDataOptions;
  CustomTooltipContent?: React.ElementType;
  zoomOptions?: IZoomOptions;
}

const OPACITY_NOT_HIGHLIGHTED = 0.2;
const DOUBLE_CLICK_ZOOM_AMOUNT = 0.4;
const WHEEL_ZOOM_AMOUNT = 0.15;

export const ScatterPlot: React.FC<ScatterPlotProps> = ({
  cartesianGridProps,
  chartProps,
  children,
  data,
  height,
  hideSummary,
  idSubstring,
  responsiveContainerProps,
  scatterProps,
  showAvarageLine = true,
  tooltipProps,
  xAverageLineProps,
  xAxisProps,
  xLabelProps,
  xLabelValue,
  yAverageLineProps,
  yAxisProps,
  yLabelProps,
  yLabelValue,
  zAxisProps,
  CustomTooltipContent,
  zoomOptions = {},
}: ScatterPlotProps) => {
  const { palette, spacing, typography } = useTheme();
  const [filteredData, setFilteredData] = React.useState(data);
  const [isMouseOverScatter, setIsMouseOverScatter] =
    React.useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = React.useState<
    ScatterPlotData | undefined
  >();
  const [xLineCoordenates, setXLineCoordenates] = React.useState<number>();
  const [yLineCoordenates, setYLineCoordenates] = React.useState<number>();
  const [dragAnchor, setDragAnchor] = React.useState<ICoordinate | undefined>(
    undefined,
  );
  const [isDragging, setIsDragging] = React.useState(false);
  const [showSummary, setShowSummary] = React.useState(false);
  const [domain, setDomain] = React.useState<IScatterDomain>({
    x: xAxisProps?.domain ? consolidateDomain(xAxisProps.domain, data) : [0, 0],
    y: yAxisProps?.domain
      ? consolidateDomain(yAxisProps.domain, data, true)
      : [0, 0],
  });
  const [initialDomain, setInitialDomain] = React.useState<
    IScatterDomain | undefined
  >(undefined);
  const [plotDimensions, setPlotDimensions] = React.useState<
    IPlotDimensions | undefined
  >(undefined);
  const [isZoomBlockingHover, setIsZoomBlockingHover] = React.useState(false);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const pxConversionDimensions = React.useMemo(
    () => ({
      x: plotDimensions?.width
        ? (domain.x[1] - domain.x[0]) / plotDimensions.width
        : 1,
      y: plotDimensions?.height
        ? (domain.y[1] - domain.y[0]) / plotDimensions.height
        : 1,
    }),
    [plotDimensions, domain],
  );

  const debouncedUnblockHovers = React.useCallback(
    debounce(() => {
      setIsZoomBlockingHover(false);
    }, 600),
    [],
  );

  const wheelHandler = (e: WheelEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    const rect = (wrapperRef.current as HTMLElement).getBoundingClientRect();
    const isZoomIn = e.deltaY < 0;
    setIsZoomBlockingHover(true);
    debouncedUnblockHovers();
    const zoomAmount = zoomOptions.wheelZoom || WHEEL_ZOOM_AMOUNT;

    const newDomain = calculateDomainAfterZoom(
      domain,
      isZoomIn ? zoomAmount : -zoomAmount,
      isZoomIn ? domain : (initialDomain as IScatterDomain),
      e.clientX - rect.left,
      e.clientY - rect.top,
      pxConversionDimensions,
      plotDimensions?.height || 0,
      plotDimensions?.width || 0,
      plotDimensions?.offset,
    );

    const dataPointsInRange = filterDataByDomain(
      isZoomIn ? filteredData : data,
      newDomain,
    );
    setFilteredData(dataPointsInRange);
    setDomain(newDomain);
  };

  const isBlockingOnHovers = isZoomBlockingHover || isDragging;

  /*
    If we use React's native onWheel prop to attach the function to the div, we can't use stopPropagation.
    React attaches the onWheel listener as "passive" by default, which then ignores the request to stop bubbling.
    So wheelHandler has to be attached to the div manually, by an event listener.

    However, wheelHandler's values change as the state changes.
    We could create a ref for each of the state values we're tracking, or (what we did here), reattach a listener on each
    value change.
  */
  React.useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('wheel', wheelHandler);
    }
    return (): void => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('wheel', wheelHandler);
      }
    };
  }, [
    wrapperRef.current,
    domain,
    plotDimensions,
    pxConversionDimensions,
    data,
    filteredData,
  ]);

  const measuredRef: React.RefCallback<IScatterRefNode> = node => {
    if (node?.state?.offset?.height && node.state.offset.width) {
      const nodeHeight = node.state.offset.height;
      const nodeWidth = node.state.offset.width;
      const left = node.state.offset.left || 0;
      const right = node.state.offset.right || 0;
      const top = node.state.offset.top || 0;
      const bottom = node.state.offset.bottom || 0;
      if (
        nodeHeight !== plotDimensions?.height ||
        nodeWidth !== plotDimensions?.width
      ) {
        setPlotDimensions({
          height: nodeHeight,
          offset: {
            bottom,
            left,
            right,
            top,
          },
          width: nodeWidth,
        });
      }
    }
  };

  const dataMaxSpread = React.useMemo<[number, number]>(() => {
    if (!data?.length) {
      return [0, 0];
    }
    const { xMin, xMax, yMin, yMax } = getMinMax(data);
    const xSpread = xMax - xMin;
    const ySpread = yMax - yMin;
    return [xSpread, ySpread];
  }, [data]);

  function resetDomain(resetInitial?: boolean): void {
    if (!initialDomain || resetInitial) {
      const calcDomain = getDomain(data, dataMaxSpread);

      const newInitialDomain = {
        x: xAxisProps?.domain
          ? consolidateDomain(xAxisProps.domain, data)
          : calcDomain.x,
        y: yAxisProps?.domain
          ? consolidateDomain(yAxisProps.domain, data, true)
          : calcDomain.y,
      };
      setInitialDomain(newInitialDomain);
      setDomain(newInitialDomain);
    } else {
      setDomain(initialDomain);
    }
  }

  function compareDomainToInitial(): boolean {
    return (
      domain.x[0] !== initialDomain?.x[0] ||
      domain.x[1] !== initialDomain?.x[1] ||
      domain.y[0] !== initialDomain?.y[0] ||
      domain.y[1] !== initialDomain?.y[1]
    );
  }

  const isZoomed = compareDomainToInitial();

  const findAverageLinesCoordenates = (
    array: number[],
    lenght: number,
  ): number => {
    return array.reduce((partialSum, item) => partialSum + item, 0) / lenght;
  };

  React.useEffect(() => {
    const { length } = data;
    const xArray = data.map(d => d.x);
    const yArray = data.map(d => d.y);

    setXLineCoordenates(findAverageLinesCoordenates(xArray, length));
    setYLineCoordenates(findAverageLinesCoordenates(yArray, length));
    setFilteredData(data);
    resetDomain(true);
  }, [data]);

  const handleZoomOut = (): void => {
    setFilteredData(data);
    resetDomain();
  };

  const handleMouseDown = (e: CategoricalChartState): void => {
    setIsDragging(true);
    const { xValue, yValue } = e || {};
    setDragAnchor([xValue || 0, yValue || 0]);
    setIsZoomBlockingHover(true);
  };

  const handleMouseUp = (): void => {
    if (isDragging) {
      setIsDragging(false);
      setDragAnchor(undefined);
    }
    debouncedUnblockHovers();
  };

  const handleDoubleClick: MouseEventHandler<HTMLDivElement> = (e): void => {
    const rect = (wrapperRef.current as HTMLElement).getBoundingClientRect();
    const zoomAmount = zoomOptions.doubleClickZoom || DOUBLE_CLICK_ZOOM_AMOUNT;
    const newDomain = calculateDomainAfterZoom(
      domain,
      zoomAmount,
      domain,
      e.clientX - rect.left,
      e.clientY - rect.top,
      pxConversionDimensions,
      plotDimensions?.height || 0,
      plotDimensions?.width || 0,
      plotDimensions?.offset,
    );
    const dataPointsInRange = filterDataByDomain(filteredData, newDomain);
    setFilteredData(dataPointsInRange);
    setDomain(newDomain);
  };

  const handleMouseMove = (e: CategoricalChartState): void => {
    if (isDragging && e) {
      const { xValue, yValue } = e;
      const newDomain = dragDomain(
        dragAnchor as ICoordinate,
        [xValue as number, yValue as number],
        domain,
        initialDomain as IScatterDomain,
      );
      const dataPointsInRange = filterDataByDomain(data, newDomain);
      setFilteredData(dataPointsInRange);
      setDomain(newDomain);
    }
  };

  const builtData = React.useMemo(
    () => buildDataPoints(filteredData, pxConversionDimensions),
    [filteredData, pxConversionDimensions],
  );

  const shouldHideLabel = evaluateLabels(builtData, pxConversionDimensions);

  const ResetButtonEndIcon = <MagnifyMinusOutline />;

  return (
    <div
      className="plot-container"
      onDoubleClick={handleDoubleClick}
      ref={wrapperRef}
      style={{ position: 'relative', width: '100%' }}
    >
      {isZoomed && (
        <Button
          color="secondary"
          endIcon={ResetButtonEndIcon}
          onClick={handleZoomOut}
          sx={{ position: 'absolute', right: spacing(1), zIndex: 1000 }}
          variant="contained"
        >
          Reset
        </Button>
      )}
      <ResponsiveContainer
        debounce={50}
        height={height || 400}
        width="100%"
        {...responsiveContainerProps}
      >
        <ScatterChart
          height={height || 400}
          margin={{
            bottom: parseInt(String(spacing(4)), 10),
            left: parseInt(String(spacing(0)), 10),
            right: parseInt(String(spacing(2)), 10),
            top: parseInt(String(spacing(4)), 10),
          }}
          onClick={(): void => {
            if (!isMouseOverScatter) setSelectedPoint(undefined);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          ref={measuredRef}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            fontFamily: typography.fontFamily,
          }}
          {...chartProps}
        >
          <CartesianGrid
            horizontal={false}
            stroke={palette.grey[300]}
            {...(cartesianGridProps as CartesianGridProps)}
          />
          <XAxis
            allowDecimals={false}
            dataKey="x"
            interval={0}
            style={{
              fill: palette.common.black,
              fontSize: typography.caption.fontSize,
              fontWeight: Number(typography.fontWeightRegular),
              userSelect: 'none',
            }}
            tickLine={false}
            type="number"
            {...xAxisProps}
            domain={domain.x.map(a => fixDecimal(a, 2))}
          >
            {xLabelValue && (
              <Label
                position="bottom"
                style={{ userSelect: 'none' }}
                value={xLabelValue}
                {...xLabelProps}
              />
            )}
          </XAxis>
          <YAxis
            allowDecimals={false}
            axisLine={{ stroke: palette.grey[400] }}
            dataKey="y"
            interval={0}
            style={{
              fill: palette.common.black,
              fontSize: typography.caption.fontSize,
              fontWeight: Number(typography.fontWeightRegular),
              userSelect: 'none',
            }}
            tickLine={false}
            type="number"
            unit="%"
            width={100}
            {...yAxisProps}
            domain={domain.y.map(a => fixDecimal(a, 2))}
          >
            <Label
              angle={-90}
              offset={-20}
              position="center"
              style={{ userSelect: 'none' }}
              value={yLabelValue}
              {...yLabelProps}
            />
          </YAxis>
          <ZAxis dataKey="x" range={[300, 300]} {...zAxisProps} />

          <Tooltip
            content={
              <CustomTooltip
                CustomTooltipContent={CustomTooltipContent}
                isBlockingOnHovers={isBlockingOnHovers}
              />
            }
            cursor={{ strokeDasharray: '3 3' }}
            itemStyle={{ color: palette.secondary.dark }}
            labelStyle={{ color: palette.secondary.dark }}
            wrapperStyle={{ outline: 'none' }}
            {...tooltipProps}
          />

          {selectedPoint && (
            <>
              <ReferenceLine strokeDasharray="3 3" x={selectedPoint.x} />
              <ReferenceLine strokeDasharray="3 3" y={selectedPoint.y} />
            </>
          )}
          {showAvarageLine && (
            <>
              <ReferenceLine
                opacity={selectedPoint ? OPACITY_NOT_HIGHLIGHTED : 1}
                stroke={palette.grey[800]}
                strokeDasharray="3 3"
                x={xLineCoordenates}
                {...xAverageLineProps}
              >
                <Label
                  position="insideBottom"
                  style={{
                    fontSize: typography.h5.fontSize,
                    fontWeight: Number(typography.fontWeightRegular),
                    userSelect: 'none',
                  }}
                  value="Top N Average"
                />
              </ReferenceLine>
              <ReferenceLine
                opacity={selectedPoint ? OPACITY_NOT_HIGHLIGHTED : 1}
                stroke={palette.grey[800]}
                strokeDasharray="3 3"
                y={yLineCoordenates}
                {...yAverageLineProps}
              >
                <Label
                  position="insideTopLeft"
                  style={{
                    fontSize: typography.h5.fontSize,
                    fontWeight: Number(typography.fontWeightRegular),
                    userSelect: 'none',
                  }}
                  value="Top N Average"
                />
              </ReferenceLine>
            </>
          )}
          <Scatter
            data={builtData}
            isAnimationActive={false}
            onClick={(e: { payload: ScatterPlotData }): void => {
              if (isMouseOverScatter) setSelectedPoint(e.payload);
            }}
            onMouseEnter={(): void => setIsMouseOverScatter(true)}
            onMouseLeave={(): void => setIsMouseOverScatter(false)}
            shape={<CustomizedCell selectedPoint={selectedPoint} />}
            {...(scatterProps as Scatter)}
          >
            <LabelList
              content={
                <CustomizedLabel
                  fontSize={typography?.h3?.fontSize as number | undefined}
                  fontWeight={typography.h3.fontWeight as number | undefined}
                  isBlockingOnHovers={isBlockingOnHovers}
                  selectedPoint={selectedPoint}
                  shouldHideLabel={shouldHideLabel}
                />
              }
              dataKey="label"
              fill={palette.secondary.dark}
              position="top"
            />
          </Scatter>
          {children}
        </ScatterChart>
      </ResponsiveContainer>
      {!hideSummary && (
        <RankSummary
          data={filteredData}
          idSubstring={idSubstring}
          selectedPoint={selectedPoint}
          setSelectedPoint={setSelectedPoint}
          setShowSummary={setShowSummary}
          showSummary={showSummary}
        />
      )}
    </div>
  );
};

ScatterPlot.defaultProps = {
  buildDataOptions: undefined,
  cartesianGridProps: undefined,
  chartProps: undefined,
  children: undefined,
  CustomTooltipContent: undefined,
  height: undefined,
  hideSummary: undefined,
  idSubstring: undefined,
  responsiveContainerProps: undefined,
  scatterProps: undefined,
  showAvarageLine: undefined,
  tooltipProps: undefined,
  xAverageLineProps: undefined,
  xAxisProps: undefined,
  xLabelProps: undefined,
  xLabelValue: undefined,
  yAverageLineProps: undefined,
  yAxisProps: undefined,
  yLabelProps: undefined,
  yLabelValue: undefined,
  zAxisProps: undefined,
  zoomOptions: undefined,
};

export default ScatterPlot;
