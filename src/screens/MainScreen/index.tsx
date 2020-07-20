/* eslint-disable global-require */
import React, {FC} from 'react';
import {FlatList, View, Image} from 'react-native';
import {RenderItemType, TodoItemsType} from 'types';
import FormAdd from '../../modules/FormAdd';
import TodoItem from '../../modules/TodoItem';
import styles from './styles';

type Props = {
  addTodoItem: (title: string) => void;
  deleteTodoItem: (id: string) => void;
  openTodoItem: (id: string) => void;
  todoItems: TodoItemsType[];
};

const MainScreen: FC<Props> = ({
  addTodoItem,
  todoItems,
  deleteTodoItem,
  openTodoItem,
}) => {
  const renderItem = ({item, index}: RenderItemType) => (
    <TodoItem
      item={item}
      index={index}
      deleteTodoItem={deleteTodoItem}
      openTodoItem={openTodoItem}
    />
  );
  return (
    <View style={styles.container}>
      <FormAdd addTodoItem={addTodoItem} />
      {todoItems.length ? (
        <FlatList
          style={styles.todosContainer}
          data={todoItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/empty.png')}
          />
        </View>
      )}
    </View>
  );
};

export default MainScreen;
