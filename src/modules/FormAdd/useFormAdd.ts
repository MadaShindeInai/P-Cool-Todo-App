import {useState, useEffect} from 'react';
import {Alert, Keyboard} from 'react-native';

type Props = {
  addTodoItem: (title: string) => void;
};

const useFormAdd = (props: Props) => {
  const {addTodoItem} = props;
  const [value, setValue] = useState('');
  const [keyboardModal, setKeyboardModal] = useState(false);
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
      setKeyboardModal(true);
    });
    return () => {
      if (keyboardModal) {
        Keyboard.removeAllListeners('keyboardDidHide');
        setKeyboardModal(false);
      }
    };
  }, [keyboardModal]);

  return {
    value,
    sendTodo,
    setValue,
  };
};

export default useFormAdd;
