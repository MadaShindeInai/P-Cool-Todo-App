import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  textInput: {
    ...THEME.fonts.regular,
    padding: 5,
    color: THEME.colors.TEXT,
    borderBottomColor: THEME.colors.BORDER,
    borderBottomWidth: 5,
    marginBottom: 20,
    width: '70%',
  },
  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {width: '40%'},
});

export default styles;
