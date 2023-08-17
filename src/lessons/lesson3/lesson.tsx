import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../../components/Page';
type Props = {};
const WORDS = ['I', 'Am', 'The', 'Storm', "That's", 'Approaching'];
const Lesson3 = (props: Props) => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      pagingEnabled
      style={styles.container}
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={16} //fire onscroll prop every 16 ms
    >
      {WORDS.map((item, index) => {
        return (
          <Page
            key={index.toString()}
            index={index}
            title={item}
            translateX={translateX}></Page>
        );
      })}
    </Animated.ScrollView>
  );
};

export default Lesson3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
