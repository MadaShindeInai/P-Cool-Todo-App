import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';

import MainScreen from 'src/screens/MainScreen';
import TodoScreen from 'src/screens/TodoScreen';
import useApp from './useApp';
import Navbar from '../Navbar';

import styles from './styles';
import THEME from '../../theme';

const App: FC<any> = () => {
  const {
    deleteTodoItem = () => {},
    addTodoItem = () => {},
    todoItems,
    todoId,
    setTodoId,
    currentTodo,
    saveEditedTitle = () => {},
    isLoaded,
  } = useApp();

  if (!isLoaded) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={THEME.colors.BORDER} />
      </View>
    );
  }

  return (
    <>
      <Navbar title="P cool TODO app" />
      <View style={styles.container}>
        {!todoId ? (
          <MainScreen
            todoItems={todoItems}
            addTodoItem={addTodoItem}
            deleteTodoItem={deleteTodoItem}
            openTodoItem={setTodoId}
          />
        ) : (
          <TodoScreen
            deleteTodoItem={deleteTodoItem}
            goMainMenu={setTodoId}
            currTodo={currentTodo}
            saveEditedTitle={saveEditedTitle}
          />
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
