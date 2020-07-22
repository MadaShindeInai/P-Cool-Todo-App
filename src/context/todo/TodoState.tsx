import React, {FC, useReducer} from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

export const TodoState: FC<any> = ({children}) => {
  const initialState = {
    todoItems: [{id: '1', title: 'hye-hye'}],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{todoItems: state.todoItems, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
