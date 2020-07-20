import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  textInput: {
    // backgroundColor: THEME.colors.MAIN,
    fontSize: 26,
    padding: 5,
    color: THEME.colors.TEXT,
    fontStyle: 'italic',
    borderBottomColor: THEME.colors.BORDER,
    borderBottomWidth: 5,
    marginBottom: 20,
    width: '70%',
    textAlign: 'center',
  },
  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {width: '40%', fontWeight: 'bold'},
});

export default styles;
