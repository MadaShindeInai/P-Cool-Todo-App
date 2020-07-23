import React, {FC, useReducer, useContext} from 'react';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS,
} from 'src/constants';
import {Alert} from 'react-native';
import {TodoItemsType} from 'types';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {ScreenContext} from '../screen/ScreenState';

const TodoState: FC<any> = ({children}) => {
  const initialState = {
    todoItems: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const {changeScreen} = useContext(ScreenContext);

  const addTodoItem = async (title: string) => {
    const response = await fetch(
      'https://rn-overview.firebaseio.com/todoItems.json',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title}),
      },
    );
    const data = await response.json();
    dispatch({type: ADD_TODO, payload: {title, id: data.name}});
  };

  const deleteTodo = (id: string) => {
    const currentTodo = state.todoItems.find(
      (item: TodoItemsType) => item.id === id,
    );
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
            changeScreen(null);
            dispatch({type: DELETE_TODO, payload: id});
          },
        },
      ],
      {cancelable: false},
    );
  };

  const saveEditedTitle = (title: string | undefined, id: string) => {
    dispatch({type: EDIT_TODO, payload: {id, title}});
  };

  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});

  const fetchTodos = async () => {
    // showLoader();
    const response = await fetch(
      'https://rn-overview.firebaseio.com/todoItems.json',
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await response.json();
    const todoItems = Object.keys(data).map((key) => ({
      // title: data[key].title,
      ...data[key],
      id: key,
    }));
    dispatch({type: FETCH_TODOS, payload: todoItems});
    // hideLoader();
  };

  const showError = () => dispatch({type: SHOW_ERROR});
  const clearError = (error: string) =>
    dispatch({type: CLEAR_ERROR, payload: error});

  return (
    <TodoContext.Provider
      value={{
        todoItems: state.todoItems,
        loading: state.loading,
        error: state.error,
        addTodoItem,
        deleteTodo,
        saveEditedTitle,
        fetchTodos,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
