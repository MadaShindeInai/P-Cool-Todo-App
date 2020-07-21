/* eslint-disable no-param-reassign */
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {TodoItemsType} from 'types';

const useApp = () => {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);
  const [todoId, setTodoId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const addTodoItem = (title: string) => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };
    setTodoItems((oldTodoItems) => [...oldTodoItems, newItem]);
  };

  const currentTodo = todoItems.find((item) => item.id === todoId);
  const saveEditedTitle = (title: string, id: string) => {
    setTodoItems((oldTodoItems) =>
      oldTodoItems.map((item) => {
        if (item.id === id) item.title = title;
        return item;
      }),
    );
  };

  const deleteTodoItem = (id: string) => {
    Alert.alert(
      'Item Deletion:',
      `Do you really want to delete ${currentTodo?.title}?`,
      [
        {
          text: 'No!',
          style: 'cancel',
        },
        {
          text: 'Sure',
          style: 'destructive',
          onPress: () => {
            setTodoItems((oldTodoItems) =>
              oldTodoItems.filter((item) => item.id !== id),
            );
            setTodoId(null);
          },
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1500);
    return () => setIsLoaded(false);
  }, []);

  return {
    deleteTodoItem,
    addTodoItem,
    todoItems,
    todoId,
    setTodoId,
    currentTodo,
    saveEditedTitle,
    isLoaded,
  };
};

export default useApp;
