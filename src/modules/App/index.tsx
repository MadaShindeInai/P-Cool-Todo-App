import React, {FC} from 'react';
import TodoState from 'src/context/todo/TodoState';
import {ScreenState} from 'src/context/screen/ScreenState';
import App from './App';

interface WrapPageElementProps {}

const AppWrapped: FC<WrapPageElementProps> = () => (
  <ScreenState>
    <TodoState>
      <App />
    </TodoState>
  </ScreenState>
);

export default AppWrapped;
