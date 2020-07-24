import {useEffect, useContext} from 'react';
import TodoContext from 'src/context/todo/todoContext';

const useApp = () => {
  const {loading, error, fetchTodos} = useContext(TodoContext);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    loading,
    error,
    fetchTodos,
  };
};

export default useApp;
