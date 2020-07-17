import {useState} from 'react';
import {TodoItemsType} from 'types';

const useApp = () => {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([
    {
      id: '1',
      title: 'Hye-hye',
    },
  ]);
  const [todoId, setTodoId] = useState<string | null>('1');

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

  const currentTodo = todoItems.find((item) => item.id === todoId);

  return {
    deleteTodoItem,
    addTodoItem,
    todoItems,
    todoId,
    setTodoId,
    currentTodo,
  };
};

export default useApp;
