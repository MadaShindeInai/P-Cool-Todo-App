import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {},
  text: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'left',
    fontSize: 22,
    borderColor: THEME.colors.BORDER,
    borderWidth: 2,
    borderStyle: 'solid',
    paddingVertical: 10,
    marginVertical: 5,
    paddingLeft: 25,
  },
});

export default styles;
