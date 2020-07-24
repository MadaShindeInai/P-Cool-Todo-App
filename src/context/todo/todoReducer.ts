import {ADD_TODO, DELETE_TODO, EDIT_TODO} from 'src/constants';
import {TodoItemsType} from 'types';

type StateType = {
  todoItems: [{id: string; title: string}];
};

type HandlersType = {
  [ADD_TODO]: (state: StateType, {payload}: {payload: string}) => any;
  [DELETE_TODO]: (state: StateType, {payload}: {payload: string}) => any;
  [EDIT_TODO]: (
    state: StateType,
    {
      payload: {id, title},
    }: any,
  ) => any;
  DEFAULT: (state: StateType) => any;
};

const handlers: HandlersType = {
  [ADD_TODO]: (state, {payload}) => {
    return {
      ...state,
      todoItems: [
        ...state.todoItems,
        {
          id: Date.now().toString(),
          title: payload,
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
  DEFAULT: (state) => state,
};

const todoReducer = (state: any, action: any) => {
  const handler =
    handlers[action.type as 'ADD_TODO' | 'DELETE_TODO' | 'EDIT_TODO'] ||
    handlers.DEFAULT;
  return handler(state, action);
};

export default todoReducer;
