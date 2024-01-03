import React from 'react';

import {StyleSheet, useColorScheme, View} from 'react-native';
import Lesson from './src/lessons/lesson1/lesson';
import Lesson2 from './src/lessons/lesson2/lesson';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Lesson3 from './src/lessons/lesson3/lesson';
import Lesson4 from './src/lessons/lesson4/lesson';
import Lesson5 from './src/lessons/lesson5/lesson';
import Lesson6 from './src/lessons/lesson6/lesson';
import Lesson7 from './src/lessons/lesson7/lesson';
import RiveTest from './src/lessons/test-rive/RiveTest';
import Test from './src/lessons/LineChartTest/Test';
import Test1 from './src/lessons/LineChartTest2/Test';
import Lesson8 from './src/lessons/lesson8/Lesson';
import Testi18next from './src/lessons/Testi18next/Testi18next';
import DateTimePickerTest from './src/lessons/TestDateTimePicker';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={styles.sectionContainer}>
      {/* <Lesson></Lesson> */}
      {/* <Lesson2></Lesson2> Pangesture Handler*/}
      {/* <Lesson3></Lesson3> interpolate scrollview */}
      {/* <Lesson4></Lesson4> interpolate color theme */}
      <Lesson5></Lesson5>  
      {/* Pinch Gesture */}
      {/* <Lesson6 />  */}
      {/* <Lesson7 />  */}
      {/* Circle Progress */}
      {/* <RiveTest /> */}
      {/* <Test /> */}
      {/* <Test1 /> */}
      {/* <Lesson8/> */}
      {/* <Testi18next /> */}
      {/* <DateTimePickerTest /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
