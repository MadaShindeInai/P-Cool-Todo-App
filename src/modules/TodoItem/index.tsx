import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  index: number;
  item: {
    id: string;
    title: string;
  };
  deleteTodoItem: (id: string) => void;
  openTodoItem: (id: string) => void;
};

const TodoItem: FC<Props> = ({item, index, deleteTodoItem, openTodoItem}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => openTodoItem(item.id)}
      onLongPress={() => deleteTodoItem(item.id)}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {index + 1}. {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
