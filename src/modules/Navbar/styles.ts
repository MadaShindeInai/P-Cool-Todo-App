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
    ...THEME.fonts.title,
    color: THEME.colors.TEXT,
  },
  textDemo: {
    ...THEME.fonts.title,
    color: THEME.colors.TEXT,
    fontSize: 34,
  },
});

export default styles;
