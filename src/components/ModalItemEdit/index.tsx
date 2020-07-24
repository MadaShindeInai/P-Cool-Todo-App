import React, {FC, Dispatch, SetStateAction} from 'react';
import {View, TextInput, Modal as RNModal} from 'react-native';
import {TodoItemsType} from 'types';
import THEME from '../../theme';
import styles from './styles';
import useModalItemEdit from './useModalItemEdit';
import AppButton from '../AppButton';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  currTodo: TodoItemsType;
};

const ModalItemEdit: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  currTodo,
}) => {
  const {inputValue, setValue, changeTodo, cancelEditMode} = useModalItemEdit({
    setIsModalVisible,
    currTodo,
  });
  return (
    <RNModal visible={isModalVisible} animationType="fade" transparent={false}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          onChangeText={(value) => setValue(value)}
          placeholder="You can type your TODOs here..."
          maxLength={24}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <AppButton color={THEME.colors.DANGER} onPress={cancelEditMode}>
              Cancel
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton color={THEME.colors.SUCCESS} onPress={changeTodo}>
              Save
            </AppButton>
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default ModalItemEdit;
