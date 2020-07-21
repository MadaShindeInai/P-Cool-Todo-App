import React, {FC, useReducer} from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

const TodoState: FC<any> = ({children}) => {
  const initialState = {
    todos: [{id: '1', title: 'hye-hye'}],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{todos: state.todos}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
