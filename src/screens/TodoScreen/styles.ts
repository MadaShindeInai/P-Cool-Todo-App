import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    width: '48%',
  },
  title: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'left',
    paddingLeft: 15,
    width: '70%',
  },
});

export default styles;
