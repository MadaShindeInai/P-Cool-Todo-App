import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.MAIN,
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: '15%',
    paddingBottom: 25,
  },
  text: {
    color: THEME.colors.TEXT,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textDemo: {
    color: THEME.colors.TEXT,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default styles;
