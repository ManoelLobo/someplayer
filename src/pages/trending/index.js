import React from 'react';
import { Text, View } from 'react-native';
import Header from 'components/Header';

import styles from './styles';

const Trending = () => (
  <View style={styles.container}>
    <Header title="Em alta" />
  </View>
);

export default Trending;
