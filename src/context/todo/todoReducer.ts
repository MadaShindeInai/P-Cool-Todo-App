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
import {TodoItemsType} from 'types';

type StateType = {
  todoItems: [{id: string; title: string}];
  loading: boolean;
  error: any;
};

type HandlersType = {
  [ADD_TODO]: (state: StateType, {payload}: {payload: TodoItemsType}) => any;
  [DELETE_TODO]: (state: StateType, {payload}: {payload: string}) => any;
  [EDIT_TODO]: (
    state: StateType,
    {
      payload: {id, title},
    }: any,
  ) => any;
  [SHOW_LOADER]: (state: StateType) => any;
  [HIDE_LOADER]: (state: StateType) => any;
  [CLEAR_ERROR]: (state: StateType) => any;
  [SHOW_ERROR]: (state: StateType, {payload}: {payload: string}) => any;
  [FETCH_TODOS]: (
    state: StateType,
    {payload}: {payload: TodoItemsType[]},
  ) => any;
  DEFAULT: (state: StateType) => any;
};

const handlers: HandlersType = {
  [ADD_TODO]: (state, {payload: {title, id}}) => {
    return {
      ...state,
      todoItems: [
        ...state.todoItems,
        {
          id,
          title,
        },
      ],
    };
  },
  [DELETE_TODO]: (state, {payload}) => {
    return {
      ...state,
      todoItems: state.todoItems.filter(
        (item: TodoItemsType) => item.id !== payload,
      ),
    };
  },
  [EDIT_TODO]: (state, {payload: {id, title}}) => {
    return {
      ...state,
      todoItems: state.todoItems.map((item: TodoItemsType) => {
        if (item.id === id) {
          return {...item, title};
        }
        return item;
      }),
    };
  },
  [SHOW_LOADER]: (state) => ({
    ...state,
    loading: true,
  }),
  [HIDE_LOADER]: (state) => ({
    ...state,
    loading: false,
  }),
  [CLEAR_ERROR]: (state) => ({
    ...state,
    error: null,
  }),
  [SHOW_ERROR]: (state, {payload}) => ({
    ...state,
    error: payload,
  }),
  [FETCH_TODOS]: (state, {payload}) => ({
    ...state,
    todoItems: payload,
  }),
  DEFAULT: (state) => state,
};

const todoReducer = (state: any, action: any) => {
  const handler =
    handlers[
      action.type as
        | 'ADD_TODO'
        | 'DELETE_TODO'
        | 'EDIT_TODO'
        | 'SHOW_LOADER'
        | 'HIDE_LOADER'
        | 'CLEAR_ERROR'
        | 'SHOW_ERROR'
        | 'FETCH_TODOS'
    ] || handlers.DEFAULT;
  return handler(state, action);
};

export default todoReducer;
