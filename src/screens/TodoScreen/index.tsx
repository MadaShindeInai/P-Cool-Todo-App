import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TodoItemsType} from 'types';
import AppCard from 'src/components/AppCard';
import THEME from 'src/theme';
import ModalItemEdit from 'src/components/ModalItemEdit';
import AppButton from 'src/components/AppButton';
import useTodoScreen from './useTodoScreen';
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
          <AppButton onPress={() => setIsModalVisible(true)}>Edit</AppButton>
        </AppCard>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
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
