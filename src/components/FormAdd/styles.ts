import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '70%',
    padding: 5,
  },
  warning: {
    color: 'red',
    fontSize: 24,
  },
});

export default styles;
