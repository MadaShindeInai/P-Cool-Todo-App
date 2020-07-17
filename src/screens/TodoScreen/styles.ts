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
    fontSize: 26,
    color: THEME.colors.TEXT,
  },
});

export default styles;
