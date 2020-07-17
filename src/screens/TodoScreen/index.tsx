import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TodoItemsType} from 'types';
import AppCard from '../../components/AppCard';

import styles from './styles';

type Props = {
  goMainMenu: (id: string | null) => void;
  deleteTodoItem: (id: string) => void;
  currTodo: TodoItemsType | undefined;
};

const cardMargin = {marginBottom: 30};

const TodoScreen: FC<Props> = ({goMainMenu, currTodo, deleteTodoItem}) => {
  return (
    <>
      <View>
        <AppCard style={cardMargin}>
          <Text style={styles.title}>{currTodo?.title}</Text>
          <Button title="Edit" onPress={() => {}} />
        </AppCard>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="Back to main menu"
              onPress={() => goMainMenu(null)}
            />
          </View>
          <View style={styles.buttonContainer}>
            {currTodo && (
              <Button
                title="Delete Item"
                color="red"
                onPress={() => deleteTodoItem(currTodo!.id)}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default TodoScreen;
