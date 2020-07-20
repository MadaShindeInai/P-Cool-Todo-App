import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TodoItemsType} from 'types';
import THEME from '../../theme';
import AppCard from '../../components/AppCard';
import useTodoScreen from './useTodoScreen';
import ModalItemEdit from '../../components/ModalItemEdit';
import AppButton from '../../components/AppButton';
import styles from './styles';

type Props = {
  goMainMenu: (id: string | null) => void;
  deleteTodoItem: (id: string) => void;
  saveEditedTitle: (inputValue: string, todoId: string) => void;
  currTodo: TodoItemsType | undefined;
};

const cardMargin = {marginBottom: 30};

const TodoScreen: FC<Props> = ({
  goMainMenu,
  currTodo,
  deleteTodoItem,
  saveEditedTitle,
}) => {
  const {isModalVisible, setIsModalVisible} = useTodoScreen();
  return (
    <>
      <ModalItemEdit
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        todoTitle={currTodo?.title}
        todoId={currTodo?.id}
        saveEditedTitle={saveEditedTitle}
      />
      <View>
        <AppCard style={cardMargin}>
          <Text numberOfLines={1} style={styles.title}>
            {currTodo?.title}
          </Text>
          <Button title="Edit" onPress={() => setIsModalVisible(true)} />
        </AppCard>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            {/* <Button
              title="Back to main menu"
              onPress={() => goMainMenu(null)}
            /> */}
            <AppButton
              color={THEME.colors.INFO}
              onPress={() => goMainMenu(null)}>
              Back
            </AppButton>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              color={THEME.colors.DANGER}
              onPress={() => currTodo && deleteTodoItem(currTodo.id)}>
              Delete Item
            </AppButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default TodoScreen;
