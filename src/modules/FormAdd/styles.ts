import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    ...THEME.fonts.light,
    borderColor: THEME.colors.BORDER,
    borderWidth: 2,
    borderStyle: 'solid',
    width: '70%',
    padding: 5,
  },
  warning: {
    ...THEME.fonts.bold,
    color: THEME.colors.DANGER,
  },
});

export default styles;
