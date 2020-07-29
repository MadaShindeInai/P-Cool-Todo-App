import {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {TodoItemsType} from 'types';
import TodoContext from 'src/context/todo/todoContext';

type Props = {
  currTodo: TodoItemsType;
  setIsModalVisible: (value: boolean) => void;
};

const useModalItemEdit = ({currTodo, setIsModalVisible}: Props) => {
  const {title, id} = currTodo;
  const [inputValue, setValue] = useState(title);
  const {saveEditedTitle} = useContext(TodoContext);

  const changeTodo = async () => {
    if (inputValue && inputValue.trim().length < 3) {
      Alert.alert(
        'Error!',
        `Todo length must be at least 3 letters, ${
          inputValue?.trim().length
        } now`,
      );
    } else {
      await saveEditedTitle(inputValue, id);
      setIsModalVisible(false);
    }
  };

  const cancelEditMode = () => {
    setValue(title);
    setIsModalVisible(false);
  };

  return {
    inputValue,
    setValue,
    changeTodo,
    cancelEditMode,
  };
};

export default useModalItemEdit;
