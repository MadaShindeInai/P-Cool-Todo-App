import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './styles';

type Props = {
  style: any;
};

const AppCard: FC<Props> = ({children, style}) => {
  return (
    <>
      <View style={{...styles.container, ...style}}>{children}</View>
    </>
  );
};

export default AppCard;
