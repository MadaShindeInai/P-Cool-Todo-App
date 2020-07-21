import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TodoItemsType} from 'types';
import AppCard from 'src/components/AppCard';
import THEME from 'src/theme';
import ModalItemEdit from 'src/components/ModalItemEdit';
import AppButton from 'src/components/AppButton';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import useTodoScreen from './useTodoScreen';
import styles from './styles';

type Props = {
  goMainMenu: (id: string | null) => void;
  deleteTodoItem: (id: string) => void;
  saveEditedTitle: (inputValue: string | undefined, todoId: string) => void;
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
            <Button
              icon={
                <Icon2 name="arrow-undo" size={24} color={THEME.colors.WHITE} />
              }
              title="Go to Main"
              raised
              ViewComponent={LinearGradient}
              containerStyle={styles.test}
              buttonStyle={styles.test}
              titleStyle={styles.testText}
              linearGradientProps={{
                colors: ['red', 'pink', 'green', 'yellow'],
                start: {x: 0.5, y: 0},
                end: {x: 0.5, y: 1},
              }}
              onPress={() => goMainMenu(null)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="remove" size={24} color={THEME.colors.WHITE} />}
              title="Delete Item"
              raised
              ViewComponent={LinearGradient}
              containerStyle={styles.test}
              buttonStyle={styles.test}
              titleStyle={styles.testText}
              linearGradientProps={{
                colors: ['red', 'pink', 'green', 'yellow'],
                start: {x: 0.5, y: 0},
                end: {x: 0.5, y: 1},
              }}
              onPress={() => currTodo && deleteTodoItem(currTodo.id)}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default TodoScreen;
