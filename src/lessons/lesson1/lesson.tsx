import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

type Props = {};
const SIZE = 100.0;
const Lesson = (props: Props) => {
  //initial value
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{scale: scale.value}],
    };
  }, []);
  useEffect(() => {
    // progress.value = withTiming(0, {duration: 3000});
    progress.value = withSpring(0.5);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: 'blue',
          },
          reanimatedStyle,
        ]}></Animated.View>
    </View>
  );
};

export default Lesson;
