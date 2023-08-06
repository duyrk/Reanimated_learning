import React from 'react';

import {StyleSheet, useColorScheme, View} from 'react-native';
import Lesson from './src/lessons/lesson1/lesson';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Lesson></Lesson>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
