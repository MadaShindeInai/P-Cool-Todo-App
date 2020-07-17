import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TodoItemsType} from 'types';
import styles from './styles';

type Props = {
  goMainMenu: (id: string | null) => void;
  deleteTodoItem: (id: string) => void;
  currTodo: TodoItemsType | undefined;
};
const TodoScreen: FC<Props> = ({goMainMenu, currTodo, deleteTodoItem}) => {
  return (
    <>
      <View>
        <Text>{currTodo?.title}</Text>
        <View style={styles.buttonsContainer}>
          <View
            style={currTodo ? styles.buttonContainer : styles.buttContainer}>
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
