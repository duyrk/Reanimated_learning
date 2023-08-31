import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Rive, {RiveRef} from 'rive-react-native';

type Props = {};
const {width, height} = Dimensions.get('screen');
const RiveTest = (props: Props) => {
  const riveRef = React.useRef<RiveRef>(null);
  return (
    <View style={styles.container}>
      <Rive
        resourceName="button"
        artboardName="New Artboard"
        stateMachineName="State Machine 1"
        autoplay={true}
        style={styles.riveStyle}
        ref={riveRef}></Rive>
    </View>
  );
};

export default RiveTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  riveStyle: {
    width: width,
    height: 50,
  },
});
