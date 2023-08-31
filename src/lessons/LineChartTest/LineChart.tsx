import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, G, Line, Path} from 'react-native-svg';

type Props = {
  data: Array<any>;
  color?: string;
  svgHeight?: number;
  svgWidth?: number;
};

const LineChart = (props: Props) => {
  const {data, color = '#ff4500', svgHeight = 200, svgWidth = 600} = props;
  /**
   * Get minimum and maximum coordinates of the value from data
   */
  const getMinX = () => {
    const only_x = data.map(obj => obj.x);
    const min_x = Math.min.apply(null, only_x);
    return min_x;
  };
  const getMinY = () => {
    const only_y = data.map(obj => obj.y);
    const min_y = Math.min.apply(null, only_y);
    return min_y;
  };
  const getMaxX = () => {
    const only_x = data.map(obj => obj.x);
    const max_x = Math.max.apply(null, only_x);
    return max_x;
  };
  const getMaxY = () => {
    const only_y = data.map(obj => obj.y);
    const max_y = Math.max.apply(null, only_y);
    return max_y;
  };
  /**
   *
   * @param x y
   * @returns svg coordinates
   */
  const getSvgX = (x: number) => {
    return (x / getMaxX()) * svgWidth;
  };
  const getSvgY = (y: number) => {
    return svgHeight - (y / getMaxY()) * svgHeight;
  };
  const makeAxis = () => {
    const minX = getMinX();
    const maxX = getMaxX();
    const minY = getMinY();
    const maxY = getMaxY();
    return (
      <G stroke="#000000">
        <Line
          x1={getSvgX(minX)}
          y1={getSvgY(minY)}
          x2={getSvgX(maxX)}
          y2={getSvgY(minY)}
        />
        <Line
          x1={getSvgX(minX)}
          y1={getSvgY(minY)}
          x2={getSvgX(minX)}
          y2={getSvgY(maxY)}
        />
      </G>
    );
  };
  const makePath = () => {
    let pathD = `M ${getSvgX(data[0].x)} 
${getSvgY(data[0].y)} `;
    pathD += data.map((point, i) => {
      return `L ${getSvgX(point.x)} ${getSvgY(point.y)}`;
    });
    return pathD;
  };
  return (
    <Svg strokeWidth={5} fill={'none'} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <Path d={makePath()} stroke={color} />
      <Line x1={0} y1={20} x2={getSvgX(getMaxX())} y2={20} stroke={'#000000'} />
      {makeAxis()}
    </Svg>
  );
};

export default LineChart;

const styles = StyleSheet.create({});
