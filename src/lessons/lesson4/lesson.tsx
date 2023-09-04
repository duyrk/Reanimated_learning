import {Dimensions, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
interface Props {}

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};
const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};
const {width, height} = Dimensions.get('window');
type Theme = 'light' | 'dark';
const Lesson4 = (props: Props) => {
  const [theme, settheme] = useState<Theme>('light');

  // const progress = useSharedValue(0);
  // useDerivedValue giong voi useSharedValue nhung co the tinh toan
  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });
  const rStyleCircle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });
  const rStyleText = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );

    return {
      color: color,
    };
  });
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.View style={[styles.circle, rStyleCircle]}>
        <Animated.Text style={[styles.text, rStyleText]}>
          Hey, I'm Duy 😎👌
        </Animated.Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggled => {
            settheme(toggled ? 'dark' : 'light');
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={'violet'}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default Lesson4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: width,
    height: width,
    borderRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
});
