import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import LineChart from './LineChart';

const data = [
  {label: 'Mon', x: 0, y: 0},
  {label: 'Tues', x: 1, y: 4},
  {label: 'Wed', x: 2, y: 30},
  {label: 'Thur', x: 3, y: 15},
  {label: 'Fri', x: 4, y: 40},
  {label: 'Sat', x: 5, y: 50},
  {label: 'Sun', x: 6, y: 40},
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
          // precision={2}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
