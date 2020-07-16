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
};

const TodoItem: FC<Props> = ({item, index, deleteTodoItem}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
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
