import {useState} from 'react';

const useTodoScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return {
    isModalVisible,
    setIsModalVisible,
  };
};

export default useTodoScreen;
