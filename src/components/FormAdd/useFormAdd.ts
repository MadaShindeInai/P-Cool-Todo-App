import {useState} from 'react';
import {Alert} from 'react-native';

type Props = {
  addTodoItem: (title: string) => void;
};

const useFormAdd = (props: Props) => {
  const {addTodoItem} = props;
  const [value, setValue] = useState('');
  const [isModal, setIsModal] = useState(false);
  const sendTodo = () => {
    if (value === '') {
      setIsModal(true);
      setTimeout(() => setIsModal(false), 3000);
      Alert.alert('A girl has no name');
      return;
    }
    addTodoItem(value);
    setValue('');
  };
  return {
    value,
    isModal,
    sendTodo,
    setValue,
  };
};

export default useFormAdd;
