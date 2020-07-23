import {createContext} from 'react';

interface IContextProps {
  todoItems: any;
  loading: boolean;
  error: string;
  addTodoItem: (title: string) => void;
  deleteTodo: (id: string) => void;
  saveEditedTitle: (title: string | undefined, id: string) => void;
  fetchTodos: () => void;
}

const TodoContext = createContext({} as IContextProps);

export default TodoContext;
