import React, {FC, Dispatch, SetStateAction} from 'react';
import {View, TextInput, Modal as RNModal} from 'react-native';
import THEME from '../../theme';
import styles from './styles';
import useModalItemEdit from './useModalItemEdit';
import AppButton from '../AppButton';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  saveEditedTitle: (inputValue: string, todoId: string) => void;
  todoTitle: string | undefined;
  todoId: string | undefined;
};

const ModalItemEdit: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  todoTitle,
  saveEditedTitle,
  todoId,
}) => {
  const {inputValue, setValue, changeTodo} = useModalItemEdit({
    todoTitle,
    saveEditedTitle,
    todoId,
    setIsModalVisible,
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
            <AppButton
              color={THEME.colors.DANGER}
              onPress={() => setIsModalVisible(false)}>
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
