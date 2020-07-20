import {useState} from 'react';
import {Alert} from 'react-native';

type Props = {
  todoTitle?: string;
  todoId?: string;
  saveEditedTitle: (inputValue: string, todoId: string) => void;
  setIsModalVisible: (value: boolean) => void;
};

const useModalItemEdit = ({
  todoTitle,
  saveEditedTitle,
  todoId = 'smth went wrong',
  setIsModalVisible,
}: Props) => {
  const [inputValue, setValue] = useState(todoTitle || '');
  const changeTodo = () => {
    if (inputValue && inputValue.trim().length < 3) {
      Alert.alert(
        'Error!',
        `Todo length must be at least 3 letters, ${
          inputValue?.trim().length
        } now`,
      );
    } else {
      saveEditedTitle(inputValue, todoId);
      setIsModalVisible(false);
    }
  };
  return {
    inputValue,
    setValue,
    changeTodo,
  };
};

export default useModalItemEdit;
