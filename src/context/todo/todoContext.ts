import {createContext} from 'react';

interface IContextProps {
  todoItems: any;
  addTodoItem: (title: string) => void;
  deleteTodo: (id: string) => void;
  saveEditedTitle: (title: string | undefined, id: string) => void;
}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
