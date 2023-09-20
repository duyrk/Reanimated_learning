import {FlatList, StyleSheet, Text, View, ViewToken} from 'react-native';
import React from 'react';
import ListItem from './components/ListItem';
import {useSharedValue} from 'react-native-reanimated';
type Props = {};
const data = new Array(50).fill(0).map((_, index) => ({id: index}));
const Lesson8 = (props: Props) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={{paddingTop: 40}}
        renderItem={({item,}) => <ListItem item={item}viewableItems={viewableItems}/>}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          console.log(viewableItems);
          viewableItems.value = vItems;
        }}
      />
    </View>
  );
};

export default Lesson8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
