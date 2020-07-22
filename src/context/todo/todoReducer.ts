import {ADD_TODO, DELETE_TODO, EDIT_TODO} from 'src/constants';
import {TodoItemsType} from 'types';

const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            id: Date.now().toString(),
            title: action.payload,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.filter(
          (item: TodoItemsType) => item.id !== action.payload,
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map((item: TodoItemsType) => {
          if (item.id === action.payload.id) {
            return {...item, title: action.payload.title};
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
