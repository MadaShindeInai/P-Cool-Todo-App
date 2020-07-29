import React, {FC, useContext} from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import MainScreen from 'src/screens/MainScreen';
import TodoScreen from 'src/screens/TodoScreen';
import {ScreenContext} from 'src/context/screen/ScreenState';
import {Button} from 'react-native-elements';
import Navbar from '../Navbar';
import useApp from './useApp';
import styles from './styles';
import THEME from '../../theme';

const App: FC<any> = () => {
  const {loading, error, fetchTodos} = useApp();
  const {todoId} = useContext(ScreenContext);

  if (loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={THEME.colors.BORDER} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{error}</Text>
        <Button
          title="Try again"
          raised
          TouchableComponent={TouchableOpacity}
          activeOpacity={0.7}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          onPress={fetchTodos}
        />
      </View>
    );
  }

  return (
    <>
      <Navbar title="P cool TODO app" />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
      <Navbar
        title="Press Add to Add"
        title2="Long Press to Delete"
        title3="Press F to pay Respects"
      />
    </>
  );
};

export default App;
