import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useMainScreen = () => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width,
  );
  const width = deviceWidth > 500 ? deviceWidth - 95 : deviceWidth - 60;

  useEffect(() => {
    Dimensions.addEventListener('change', () =>
      setDeviceWidth(Dimensions.get('window').width),
    );
    return () => {
      Dimensions.removeEventListener('change', () =>
        setDeviceWidth(Dimensions.get('window').width),
      );
    };
  });

  return {
    width,
  };
};

export default useMainScreen;
