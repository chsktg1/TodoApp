import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
const AddTodo = props => {
  console.log(props);
  const {addTodo} = props;
  const [first, setfirst] = useState('');
  return (
    <View>
      <TextInput
        style={{borderWidth: 1, padding: 10}}
        placeholder="enter todo"
        onChangeText={t => setfirst(t)}
        value={first}
      />
      <Button
        title="Add Todo"
        onPress={() => {
          addTodo(first);
        }}
        style={{backgroundColor: 'orange'}}
      />
    </View>
  );
};

export default AddTodo;
