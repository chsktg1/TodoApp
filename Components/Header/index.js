import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={s1.v1}>
      <Text style={s1.t1}>Todo List</Text>
    </View>
  );
};

const s1 = StyleSheet.create({
  v1: {
    backgroundColor: '#00f0f0',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  t1: {
    color: 'black',
    fontSize: 40,
  },
});

export default Header;
