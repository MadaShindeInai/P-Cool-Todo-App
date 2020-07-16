import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  index: number;
  item: {
    id: string;
    title: string;
  };
};

const TodoItem: FC<Props> = ({item, index}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          {index + 1}. {item.title}
        </Text>
      </View>
    </>
  );
};

export default TodoItem;
