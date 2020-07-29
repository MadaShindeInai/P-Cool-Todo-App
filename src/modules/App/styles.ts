import {StyleSheet} from 'react-native';
import THEME from 'src/theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 30, paddingVertical: 15, height: '70%'},
  spinner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
    paddingHorizontal: 30,
  },
  error: {
    ...THEME.fonts.bold,
    color: THEME.colors.DANGER,
  },
  buttonContainer: {
    backgroundColor: THEME.colors.MAIN,
    marginTop: 10,
  },
  buttonText: {
    ...THEME.fonts.bold,
    color: THEME.colors.TEXT,
  },
});

export default styles;
