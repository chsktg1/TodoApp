import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
const ListItems = prop => {
  const {id, text, deleteTod} = prop;

  const invokeMe = () => {
    console.log('called1');
    deleteTod(text);
  };

  return (
    <View style={s1.t1}>
      <Text>{text}</Text>
      <Button style={s1.b1} title="Remove" color="red" onPress={invokeMe} />
    </View>
  );
};
const s1 = StyleSheet.create({
  t1: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  b1: {
    backgroundColor: 'black',
  },
});
export default ListItems;
