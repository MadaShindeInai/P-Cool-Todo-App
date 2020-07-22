import React, {FC, ComponentType} from 'react';
import {
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Text,
} from 'react-native';
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
  const WrapperBasedOnPlatform: ComponentType<any> =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

  return (
    <WrapperBasedOnPlatform onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </WrapperBasedOnPlatform>
  );
};

export default AppButton;
