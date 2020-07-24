import React, {FC, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import MainScreen from 'src/screens/MainScreen';
import TodoScreen from 'src/screens/TodoScreen';
import {ScreenContext} from 'src/context/screen/ScreenState';
import useApp from './useApp';
import Navbar from '../Navbar';

import styles from './styles';
import THEME from '../../theme';

const App: FC<any> = () => {
  const {isLoaded} = useApp();
  const {todoId} = useContext(ScreenContext);

  if (!isLoaded) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={THEME.colors.BORDER} />
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
