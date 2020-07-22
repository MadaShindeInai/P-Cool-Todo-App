import React, {FC} from 'react';
import TodoState from 'src/context/todo/TodoState';
import App from './App';

interface WrapPageElementProps {}

const AppWrapped: FC<WrapPageElementProps> = () => (
  <TodoState>
    <App />
  </TodoState>
);

export default AppWrapped;
