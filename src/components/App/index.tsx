import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Navbar from '../Navbar';
import FormAdd from '../FormAdd';
import TodoItem from '../TodoItem';
import useApp from './useApp';

type TodoItemsType = {
  id: string;
  title: string;
};
export type RenderItemType = {
  item: TodoItemsType;
  index: number;
};

const App: FC<any> = () => {
  const {deleteTodoItem, addTodoItem, todoItems} = useApp();

  const renderItem = ({item, index}: RenderItemType) => (
    <TodoItem item={item} index={index} deleteTodoItem={deleteTodoItem} />
  );
  return (
    <>
      <Navbar title="P cool TODO app" />
      <View style={styles.container}>
        <FormAdd addTodoItem={addTodoItem} />
        <FlatList
          style={styles.todosContainer}
          data={todoItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
