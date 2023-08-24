import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
type Props = {};

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA';

const {width, height} = Dimensions.get('window');
const CIRCLE_LENGTH = 1000; // chu vi
const R = CIRCLE_LENGTH / (2 * Math.PI); // ban kinh = chu vi / 2 pi
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const Lesson7 = (props: Props) => {
  const progress = useSharedValue(0);
  useEffect(() => {}, []);
  const animatedProp = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));
  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });
  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {duration: 2000});
  }, []);
  return (
    <View style={styles.container}>
      <ReText
        style={[
          {
            color: 'rgba(255, 255, 255,0.7)',
            zIndex: 1,
            fontSize: 80,
          },
        ]}
        text={progressText}
      />
      <Svg style={{position: 'absolute', zIndex: 0}}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
          fill={'none'}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          fill={'none'}
          strokeDasharray={CIRCLE_LENGTH}
          // strokeDashoffset={CIRCLE_LENGTH * progress.value}
          animatedProps={animatedProp}
          strokeLinecap={'round'}
        />
      </Svg>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text
          style={{
            fontSize: 25,
            letterSpacing: 2.5,
          }}>
          Run
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lesson7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    backgroundColor: BACKGROUND_STROKE_COLOR,
    width: width * 0.7,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
