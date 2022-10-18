import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Components/Header';
import {uuid} from 'uuidv4';
import ListItems from './Components/ListItems';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AddTodo from './Components/AddTodo';
const data = [
  {id: 'uuid()', todo: 'eat'},
  {id: 'uuid()', todo: 'sleep'},
  {id: 'uuid()', todo: 'drink'},
  {id: 'uuid()', todo: 'code'},
];

const App = () => {
  const [to, setTodo] = useState(data);

  const deleteTod = todoValue => {
    console.log('called12');
    const newTodos = to.filter(e => e.todo !== todoValue);
    setTodo(newTodos);
  };

  const addTodo = todo => {
    setTodo([...to, {todo}]);
  };

  return (
    <View style={s1.v1}>
      <Header />
      <AddTodo addTodo={addTodo} />
      {to.map(e => (
        <>
          <ListItems
            deleteTod={deleteTod}
            style={s1.l1}
            text={e.todo}
            key={e.todo}
          />
          {/* <Icon name="remove" size={20} /> */}
        </>
      ))}
    </View>
  );
};

const s1 = StyleSheet.create({
  v1: {
    paddingTop: 50,
  },
});

export default App;
