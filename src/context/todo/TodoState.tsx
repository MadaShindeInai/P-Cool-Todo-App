import React, {FC, useReducer, useContext} from 'react';
import {ADD_TODO, DELETE_TODO, EDIT_TODO} from 'src/constants';
import {Alert} from 'react-native';
import {TodoItemsType} from 'types';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {ScreenContext} from '../screen/ScreenState';

const TodoState: FC<any> = ({children}) => {
  const initialState = {
    todoItems: [{id: '1', title: 'hye-hye'}],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const {changeScreen} = useContext(ScreenContext);

  const addTodoItem = (title: string) => {
    dispatch({type: ADD_TODO, payload: title});
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

  return (
    <TodoContext.Provider
      value={{
        todoItems: state.todoItems,
        addTodoItem,
        deleteTodo,
        saveEditedTitle,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
