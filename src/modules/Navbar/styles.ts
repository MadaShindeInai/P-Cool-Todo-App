import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: '15%',
    paddingBottom: 25,
  },
  containerAnrdoid: {
    backgroundColor: THEME.colors.MAIN,
  },
  containerIos: {
    borderBottomColor: THEME.colors.MAIN,
    borderTopColor: THEME.colors.MAIN,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderStyle: 'solid',
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
