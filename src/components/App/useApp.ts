import {useState} from 'react';
import {TodoItemsType} from 'types';

const useApp = () => {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);
  const [todoId, setTodoId] = useState<string | null>(null);

  const addTodoItem = (title: string) => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };
    setTodoItems((oldTodoItems) => [...oldTodoItems, newItem]);
  };

  const deleteTodoItem = (id: string) => {
    setTodoItems((oldTodoItems) =>
      oldTodoItems.filter((item) => item.id !== id),
    );
  };

  return {deleteTodoItem, addTodoItem, todoItems, todoId, setTodoId};
};

export default useApp;
