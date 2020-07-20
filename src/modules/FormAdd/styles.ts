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
    borderColor: THEME.colors.BORDER,
    borderWidth: 2,
    borderStyle: 'solid',
    width: '70%',
    padding: 5,
    fontStyle: 'italic',
  },
  warning: {
    color: THEME.colors.DANGER,
    fontSize: 24,
  },
});

export default styles;
