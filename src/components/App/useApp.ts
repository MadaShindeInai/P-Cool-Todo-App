import {useState} from 'react';

type TodoItemsType = {
  id: string;
  title: string;
};

const useApp = () => {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);

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

  return {deleteTodoItem, addTodoItem, todoItems};
};

export default useApp;
