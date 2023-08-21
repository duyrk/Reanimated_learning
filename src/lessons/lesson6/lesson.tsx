import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const AnimatedImage = Animated.createAnimatedComponent(Image);
type Props = {};
const {width, height} = Dimensions.get('window');
const Lesson6 = (props: Props) => {
  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });
  const rTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const DoubleTapHandler = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);
  const SingleTapHandler = useCallback(() => {
    opacity.value = withSpring(0, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(500, withSpring(1));
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={SingleTapHandler}>
        <TapGestureHandler
          maxDelayMs={250}
          numberOfTaps={2}
          ref={doubleTapRef}
          onActivated={DoubleTapHandler}>
          <Animated.View>
            <ImageBackground
              source={require('../../assets/shiba.jpg')}
              style={styles.image}>
              <AnimatedImage
                source={require('../../assets/heart.png')}
                style={[styles.image, rStyle]}
                resizeMode="center"
              />
            </ImageBackground>
            <Animated.Text
              style={[
                {fontSize: 40, textAlign: 'center', marginTop: 30},
                rTextStyle,
              ]}>
              🐢🐢🐢🐢
            </Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default Lesson6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: width,
    resizeMode: 'cover',
  },
});
