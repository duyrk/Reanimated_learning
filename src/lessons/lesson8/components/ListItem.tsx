import {StyleSheet, Text, View, ViewToken} from 'react-native';
import React from 'react';
import Animated, {SharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

type Props = {
  viewableItems: SharedValue<ViewToken[]>;
  item: {id: number};
};

const ListItem: React.FC<Props> = React.memo(({item, viewableItems}) => {
  const rStyle = useAnimatedStyle(() => {
    const visible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );
    return {
      opacity: withTiming(visible ? 1 : 0),
      transform:[
        {scale: withTiming(visible ? 1 : 0.6)}
      ]
    };
  }, []);
  return (
    <Animated.View
      style={[{
        height: 80,
        width: '90%',
        backgroundColor: '#78CAD2',
        marginTop: 25,
        borderRadius: 15,
        alignSelf: 'center',
      },rStyle]}
    />
  );
});

export default ListItem;

const styles = StyleSheet.create({});
