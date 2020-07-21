import React, {FC} from 'react';
import {FlatList, View, Image} from 'react-native';
import {RenderItemType, TodoItemsType} from 'types';
import FormAdd from 'src/modules/FormAdd';
import TodoItem from 'src/modules/TodoItem';
import useMainScreen from './useMainScreen';
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
  const {width} = useMainScreen();

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
        <View style={{width}}>
          <FlatList
            style={styles.todosContainer}
            data={todoItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
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
