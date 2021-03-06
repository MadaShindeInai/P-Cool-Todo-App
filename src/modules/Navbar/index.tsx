import React, {FC} from 'react';
import {View, Text, Platform} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  title2?: string;
  title3?: string;
};

const Navbar: FC<Props> = ({title, title2, title3}) => {
  return (
    <>
      <View
        style={{
          ...styles.container,
          ...Platform.select({
            ios: {...styles.containerIos},
            android: {...styles.containerAnrdoid},
            default: {
              backgroundColor: 'blue',
            },
          }),
        }}>
        {!title2 && <Text style={styles.textDemo}>{title}</Text>}
        {title2 && <Text style={styles.text}>{title}</Text>}
        {title2 && <Text style={styles.text}>{title2}</Text>}
        {title3 && <Text style={styles.text}>{title3}</Text>}
      </View>
    </>
  );
};

export default Navbar;
