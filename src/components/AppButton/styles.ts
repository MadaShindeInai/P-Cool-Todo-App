import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    ...THEME.fonts.bold,
    color: THEME.colors.MAIN,
    fontSize: 24,
  },
});

export default styles;
