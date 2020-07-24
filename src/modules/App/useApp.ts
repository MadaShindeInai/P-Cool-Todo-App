import {useState, useEffect} from 'react';

const useApp = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
    return () => setIsLoaded(false);
  }, []);

  return {
    isLoaded,
  };
};

export default useApp;
