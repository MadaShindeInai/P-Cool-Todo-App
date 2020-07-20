import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import THEME from '../../theme';
import styles from './styles';

type Props = {
  onPress: any;
  color: string;
};

const AppButton: FC<Props> = ({
  children,
  onPress,
  color = THEME.colors.MAIN,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
