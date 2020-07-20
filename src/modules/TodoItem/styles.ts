import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {},
  text: {
    borderColor: THEME.colors.BORDER,
    borderWidth: 2,
    borderStyle: 'solid',
    paddingVertical: 8,
    marginVertical: 5,
    paddingHorizontal: 5,
    color: THEME.colors.TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
