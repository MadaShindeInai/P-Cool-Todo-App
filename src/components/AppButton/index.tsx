import React, {FC} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import THEME from '../../theme';
import styles from './styles';

type Props = {
  onPress: any;
  color?: string;
};

const AppButton: FC<Props> = ({
  children,
  onPress,
  color = THEME.colors.TEXT,
}) => {
  return (
    <TouchableHighlight onPress={onPress} activeOpacity={0.2}>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default AppButton;
