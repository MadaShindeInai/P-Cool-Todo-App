import React, {FC} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import styles from './styles';
import useFormAdd from './useFormAdd';

type Props = {
  addTodoItem: (title: string) => void;
};

const FormAdd: FC<Props> = (props) => {
  const {isModal, sendTodo, setValue, value} = useFormAdd(props);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="You can type your TODOs here..."
          onChangeText={setValue}
          value={value}
          autoCorrect={false}
          // autoCapitalize="none"
        />
        <Button title="Add" onPress={sendTodo} />
      </View>
      {isModal && (
        <Text style={styles.warning}>Pliz add text to the input field!!!!</Text>
      )}
    </>
  );
};

export default FormAdd;
