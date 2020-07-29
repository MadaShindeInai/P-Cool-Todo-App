import React, {FC, useReducer, useContext, useCallback} from 'react';
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
import {getData, addItemData, editItemData} from 'src/firebase';
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

  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});
  const showError = (error: string) =>
    dispatch({type: SHOW_ERROR, payload: error});
  const clearError = () => dispatch({type: CLEAR_ERROR});

  const addTodoItem = async (title: string) => {
    const data = await addItemData(title);
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
    clearError();
    try {
      editItemData(id, title);
    } catch (e) {
      showError('Something went wrong...');
    }
    dispatch({type: EDIT_TODO, payload: {id, title}});
  };

  const fetchTodos = useCallback(async () => {
    showLoader(); // set true in state loading
    clearError(); // set null in state error
    try {
      const todoItems = await getData(); // get and parse data
      dispatch({type: FETCH_TODOS, payload: todoItems}); // set data in state todoItems
    } catch (e) {
      showError('Something went wrong...'); // set text in state error
    } finally {
      hideLoader(); // set false in state loading
    }
  }, []);

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
