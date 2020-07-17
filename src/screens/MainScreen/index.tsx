import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {RenderItemType, TodoItemsType} from 'types';
import FormAdd from '../../components/FormAdd';
import TodoItem from '../../components/TodoItem';
import styles from './styles';

type Props = {
  addTodoItem: (title: string) => void;
  deleteTodoItem: (id: string) => void;
  todoItems: TodoItemsType[];
};

const MainScreen: FC<Props> = ({addTodoItem, todoItems, deleteTodoItem}) => {
  const renderItem = ({item, index}: RenderItemType) => (
    <TodoItem item={item} index={index} deleteTodoItem={deleteTodoItem} />
  );
  return (
    <>
      <View style={styles.container}>
        <FormAdd addTodoItem={addTodoItem} />
        <FlatList
          style={styles.todosContainer}
          data={todoItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default MainScreen;
