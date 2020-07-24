import {useState, useContext} from 'react';
import {TodoItemsType} from 'types';
import TodoContext from 'src/context/todo/todoContext';
import {ScreenContext} from 'src/context/screen/ScreenState';

const useTodoScreen = () => {
  const {todoItems} = useContext(TodoContext);
  const {todoId} = useContext(ScreenContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const currTodo = todoItems.find((item: TodoItemsType) => item.id === todoId);
  return {
    isModalVisible,
    currTodo,
    setIsModalVisible,
  };
};

export default useTodoScreen;
