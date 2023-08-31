import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Polyline} from 'react-native-svg';
import LineChart from './LineChart';

const data = [
  {label: 'S', x: 0, y: 0},
  {label: 'M', x: 1, y: 4},
  {label: 'T', x: 2, y: 30},
  {label: 'W', x: 3, y: 15},
  {label: 'TH', x: 4, y: 40},
  {label: 'F', x: 5, y: 50},
  {label: 'S', x: 6, y: 40},
];
const {width, height} = Dimensions.get('screen');
type Props = {};
const Test1 = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.chartWrapper}>
        <LineChart
          width={width}
          height={300}
          data={data}
          precision={2}
          verticalGuides={data.length - 1}
          horizontalGuides={5}
        />
      </View>
    </View>
  );
};

export default Test1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  chartWrapper: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
