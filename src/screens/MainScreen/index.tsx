import React, {FC, useContext} from 'react';
import {FlatList, View, Image} from 'react-native';
import {RenderItemType} from 'types';
import FormAdd from 'src/modules/FormAdd';
import TodoItem from 'src/modules/TodoItem';

import TodoContext from 'src/context/todo/todoContext';
import useMainScreen from './useMainScreen';
import styles from './styles';

type Props = {};

const MainScreen: FC<Props> = () => {
  const {width} = useMainScreen();
  const {todoItems} = useContext(TodoContext);

  const renderItem = ({item, index}: RenderItemType) => (
    <TodoItem item={item} index={index} />
  );
  return (
    <View style={styles.container}>
      <FormAdd />
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
