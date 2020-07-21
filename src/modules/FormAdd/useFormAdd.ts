import {useState, useEffect} from 'react';
import {Alert, Keyboard} from 'react-native';

type Props = {
  addTodoItem: (title: string) => void;
};

const useFormAdd = (props: Props) => {
  const {addTodoItem} = props;
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

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      Alert.alert('Aviasales! <---- search for cheap flights');
    });
    return () => {
      Keyboard.removeListener('keyboardDidHide', () => {
        Alert.alert('Aviasales! <---- search for cheap flights');
      });
    };
  }, []);

  return {
    value,
    sendTodo,
    setValue,
  };
};

export default useFormAdd;
