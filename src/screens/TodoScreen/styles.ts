import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    // width: Dimensions.get('window').width / 2.5,
    width: Dimensions.get('window').width > 400 ? 160 : 100,
  },
  title: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
    textAlign: 'left',
    paddingLeft: 15,
    width: '70%',
  },
  test: {
    height: 50,
  },
  testText: {
    ...THEME.fonts.bold,
    fontSize: 24,
    paddingLeft: 5,
  },
});

export default styles;
