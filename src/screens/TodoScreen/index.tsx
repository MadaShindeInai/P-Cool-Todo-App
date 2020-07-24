import React, {FC, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppCard from 'src/components/AppCard';
import THEME from 'src/theme';
import ModalItemEdit from 'src/components/ModalItemEdit';
import AppButton from 'src/components/AppButton';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {ScreenContext} from 'src/context/screen/ScreenState';
import TodoContext from 'src/context/todo/todoContext';
import useTodoScreen from './useTodoScreen';
import styles from './styles';

type Props = {};

const cardMargin = {marginBottom: 30};

const TodoScreen: FC<Props> = () => {
  const {deleteTodo} = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);
  const {isModalVisible, currTodo, setIsModalVisible} = useTodoScreen();
  return (
    <>
      <ModalItemEdit
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        currTodo={currTodo}
      />
      <View>
        <AppCard style={cardMargin}>
          <Text numberOfLines={1} style={styles.title}>
            {currTodo.title}
          </Text>
          <AppButton onPress={() => setIsModalVisible(true)}>Edit</AppButton>
        </AppCard>
        <View style={styles.buttonsContainer}>
          <Button
            icon={
              <Icon2 name="arrow-undo" size={24} color={THEME.colors.WHITE} />
            }
            title="Go to Main"
            raised
            ViewComponent={LinearGradient}
            TouchableComponent={TouchableOpacity}
            activeOpacity={0.7}
            containerStyle={styles.test}
            buttonStyle={styles.test}
            titleStyle={styles.testText}
            linearGradientProps={{
              colors: ['yellow', 'green', 'pink', 'red'],
              start: {x: 0, y: 0.5},
              end: {x: 0.5, y: 1},
            }}
            onPress={() => changeScreen(null)}
          />
          <Button
            icon={<Icon name="remove" size={24} color={THEME.colors.WHITE} />}
            title="Delete Item"
            raised
            ViewComponent={LinearGradient}
            TouchableComponent={TouchableOpacity}
            activeOpacity={0.7}
            containerStyle={styles.testCont}
            buttonStyle={styles.test}
            titleStyle={styles.testText}
            linearGradientProps={{
              colors: ['yellow', 'green', 'pink', 'red'],
              start: {x: 0, y: 0.5},
              end: {x: 0.5, y: 1},
            }}
            onPress={() => deleteTodo(currTodo.id)}
          />
        </View>
      </View>
    </>
  );
};

export default TodoScreen;
