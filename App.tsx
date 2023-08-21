import React from 'react';

import {StyleSheet, useColorScheme, View} from 'react-native';
import Lesson from './src/lessons/lesson1/lesson';
import Lesson2 from './src/lessons/lesson2/lesson';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Lesson3 from './src/lessons/lesson3/lesson';
import Lesson4 from './src/lessons/lesson4/lesson';
import Lesson5 from './src/lessons/lesson5/lesson';
import Lesson6 from './src/lessons/lesson6/lesson';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={styles.sectionContainer}>
      {/* <Lesson></Lesson> */}
      {/* <Lesson2></Lesson2> Pangesture Handler*/}
      {/* <Lesson3></Lesson3> interpolate scrollview */}
      {/* <Lesson4></Lesson4> interpolate color theme */}
      {/* <Lesson5></Lesson5>   Pinch Gesture */}
      <Lesson6 />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
