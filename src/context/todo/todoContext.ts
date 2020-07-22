import {createContext, Dispatch} from 'react';

interface IContextProps {
  todoItems: any;
  dispatch: Dispatch<any>;
}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
