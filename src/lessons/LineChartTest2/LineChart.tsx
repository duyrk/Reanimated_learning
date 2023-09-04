import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Circle, G, Path, Polyline, Rect, Svg, Text} from 'react-native-svg';

type Props = {
  data: Array<any>;
  width: number;
  height: number;
  precision?: any;
  verticalGuides?: number;
  horizontalGuides: number;
};
const LineChart = (props: Props) => {
  const {data, width, height, precision, verticalGuides, horizontalGuides} =
    props;
  const FONT_SIZE = 12;
  const maximumXFromData = Math.max(...data.map(e => e.x));
  const maximumYFromData = Math.max(...data.map(e => e.y));
  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;
  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const Axis = ({points}: any) => (
    <Polyline fill={'none'} stroke={'#ccc'} strokeWidth={0.5} points={points} />
  );
  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${
        height - padding
      }`}
    />
  );
  const YAxis = () => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
  );

  const points = data
    .map(element => {
      /**
       * map over each element in the data array and calculate where x and y values are for the SVG point
       */
      const x = (element.x / maximumXFromData) * chartWidth + padding;
      const y =
        chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
      return `${x},${y}`;
    })
    .join(' ');
  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;
    return new Array(horizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / (horizontalGuides ?? 1);
      const yCoordinate = chartHeight - chartHeight * ratio + padding;
      return (
        <React.Fragment key={index}>
          <Polyline
            fill={'none'}
            stroke={'#ccc'}
            strokeWidth={0.5}
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </React.Fragment>
      );
    });
  };
  const VerticalGuides = () => {
    const startY = padding;
    const endY = height - padding;
    return new Array(verticalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / (verticalGuides ?? 1);
      const xCoordinate = padding + ratio * (width - padding * 2);
      return (
        <React.Fragment key={index}>
          <Polyline
            fill={'none'}
            stroke={'#ccc'}
            strokeWidth={0.5}
            points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
          />
        </React.Fragment>
      );
    });
  };
  const CustomDots = () => {
    return data.map((element, index) => {
      /**
       * map over each element in the data array and calculate where x and y values are for the SVG point
       */
      const x = (element.x / maximumXFromData) * chartWidth + padding;
      const y =
        chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
      return (
        <Circle
          key={index}
          onPress={() => {
            console.log(index);
          }}
          fill={'#FFC107'}
          strokeWidth={2}
          stroke={'white'}
          cx={x}
          cy={y}
          r={8}
        />
      );
    });
  };

  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;
    return data.map((element, index) => {
      const x =
        (element.x / maximumXFromData) * chartWidth + padding - FONT_SIZE / 2;
      return (
        <Text
          key={index}
          x={x}
          y={y}
          fill={'#808080'}
          fontSize={FONT_SIZE}
          fontFamily="Helvetica">
          {element.label}
        </Text>
      );
    });
  };
  const LabelsYAxis = () => {
    const PARTS = horizontalGuides ?? 0;
    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / horizontalGuides;
      const y = chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
      return (
        <Text
          key={index}
          x={x}
          y={y}
          fill={'#808080'}
          fontSize={FONT_SIZE}
          fontFamily="Helvetica">
          {(maximumYFromData * (index / PARTS)).toFixed(precision)}
        </Text>
      );
    });
  };
  return (
    <Svg
      fill={'none'}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}>
      <XAxis />
      <YAxis />
      <LabelsXAxis />
      <LabelsYAxis />
      {verticalGuides && <VerticalGuides />}
      <HorizontalGuides />
      <Polyline
        fill={'none'}
        stroke={'#FFEFAD'}
        strokeWidth={2}
        points={points}
        strokeLinecap="round"
      />
      <CustomDots />
    </Svg>
  );
};

export default LineChart;

const styles = StyleSheet.create({});
