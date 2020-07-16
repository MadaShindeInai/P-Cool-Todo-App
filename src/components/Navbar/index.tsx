import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
};

const Navbar: FC<Props> = ({title}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </>
  );
};

export default Navbar;
