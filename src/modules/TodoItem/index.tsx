import React, {FC, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScreenContext} from 'src/context/screen/ScreenState';
import TodoContext from 'src/context/todo/todoContext';
import styles from './styles';

type Props = {
  index: number;
  item: {
    id: string;
    title: string;
  };
};

const TodoItem: FC<Props> = ({item, index}) => {
  const {changeScreen} = useContext(ScreenContext);
  const {deleteTodo} = useContext(TodoContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => changeScreen(item.id)}
      onLongPress={() => deleteTodo(item.id)}>
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.text}>
          {index + 1}. {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
