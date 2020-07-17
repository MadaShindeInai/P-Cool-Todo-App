import React, {FC} from 'react';
import {View} from 'react-native';
import MainScreen from '../../screens/MainScreen';
import TodoScreen from '../../screens/TodoScreen';
import useApp from './useApp';
import Navbar from '../Navbar';

import styles from './styles';

const App: FC<any> = () => {
  const {deleteTodoItem, addTodoItem, todoItems, todoId, setTodoId} = useApp();

  return (
    <>
      <Navbar title="P cool TODO app" />
      <View style={styles.container}>
        {!todoId ? (
          <MainScreen
            todoItems={todoItems}
            addTodoItem={addTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ) : (
          <TodoScreen />
        )}
      </View>
      <Navbar
        title="Press Add to Add"
        title2="Long Press to Delete"
        title3="Press F to pay Respects"
      />
    </>
  );
};

export default App;
