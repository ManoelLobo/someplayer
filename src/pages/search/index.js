import React from 'react';
import { TextInput, View } from 'react-native';
import Header from 'components/Header';

import styles from './styles';

const Search = () => (
  <View style={styles.container}>
    <Header>
      <TextInput />
    </Header>
  </View>
);

export default Search;
