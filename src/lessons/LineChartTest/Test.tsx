import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LineChart from './LineChart';

type Props = {};
const DATA = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const Test = (props: Props) => {
  const randomArray = (total = 5) => {
    let data = [];
    for (let element = 0; element < total; element++) {
      const y = Math.floor(Math.random() * 50);
      const obj = {
        x: element,
        y: y,
      };
      data.push(obj);
    }
    return data;
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}>
      <View>
        <LineChart data={randomArray()} />
      </View>

      {DATA.map(item => (
        <Text style={{color: 'black'}}>{item}</Text>
      ))}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
