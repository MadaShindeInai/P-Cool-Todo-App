import {useState, useEffect, useContext} from 'react';
import {ADD_TODO, DELETE_TODO, EDIT_TODO} from 'src/constants';
import {Alert} from 'react-native';
import {TodoItemsType} from 'types';
import TodoContext from 'src/context/todo/todoContext';

const useApp = () => {
  // const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);
  const [todoId, setTodoId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const {todoItems, dispatch} = useContext(TodoContext);

  const currentTodo = todoItems.find(
    (item: TodoItemsType) => item.id === todoId,
  );

  const addTodoItem = (title: string) => {
    dispatch({type: ADD_TODO, payload: title});
  };

  const saveEditedTitle = (title: string | undefined, id: string) => {
    dispatch({type: EDIT_TODO, payload: {id, title}});
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
            dispatch({type: DELETE_TODO, payload: id});
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
