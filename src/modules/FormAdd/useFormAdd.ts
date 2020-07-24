import {useState, useContext} from 'react';
import {Alert, Keyboard} from 'react-native';
import TodoContext from 'src/context/todo/todoContext';

const useFormAdd = () => {
  const {addTodoItem} = useContext(TodoContext);
  const [value, setValue] = useState('');
  const sendTodo = () => {
    if (value === '') {
      Keyboard.dismiss();
      Alert.alert('Pliz add text to the input field!!!!');
      return;
    }
    addTodoItem(value);
    setValue('');
    Keyboard.dismiss();
  };

  return {
    value,
    sendTodo,
    setValue,
  };
};

export default useFormAdd;
