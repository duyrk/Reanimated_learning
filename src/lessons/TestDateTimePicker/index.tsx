import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
type Props = {};

const DateTimePickerTest = (props: Props) => {
  const [show, setShow] = React.useState(true);
  const onChange = () =>{
    console.log('on change')
  }
  return (
    <View>{show && <DateTimePicker mode="date" value={new Date()} onChange={onChange}/>}</View>
  );
};

export default DateTimePickerTest;

const styles = StyleSheet.create({});
