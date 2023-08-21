import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {};
const imageUri =
  'https://e0.pxfuel.com/wallpapers/466/677/desktop-wallpaper-phone-japanese-style-neon-shallows-japan-phone-thumbnail.jpg';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const {width, height} = Dimensions.get('window');
const Lesson5 = (props: Props) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  //focal la toa do trung diem cua 2 ngon tay dat vao
  const pinchGestureHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onStart: event => {},
      onActive: event => {
        console.log(event);
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: event => {
        scale.value = withTiming(1);
      },
    });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        //nhiem vu de scale
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        //apply lai gia tri cu
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });
  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });
  return (
    <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
      <Animated.View style={{flex: 1}}>
        <AnimatedImage
          style={[{flex: 1}, rStyle]}
          source={{uri: imageUri}}></AnimatedImage>
        <Animated.View
          style={[styles.focalPoint, focalPointStyle]}></Animated.View>
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default Lesson5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
