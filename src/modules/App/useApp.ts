import {useEffect, useContext, useCallback} from 'react';
import TodoContext from 'src/context/todo/todoContext';

const useApp = () => {
  const {loading, fetchTodos} = useContext(TodoContext);

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    loading,
  };
};

export default useApp;
