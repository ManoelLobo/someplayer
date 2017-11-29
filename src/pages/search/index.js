import React, { Component } from 'react';
import { TextInput, View, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';

import styles from './styles';

export default class Search extends Component {
  state = {
    searchText: '',
  }

  inputChangedText = (searchText) => {
    this.setState({ searchText });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar música"
            placeholderTextColor="#999"
            underlineColorAndroid="transparent"
            onChangeText={this.inputChangedText}
          />
        </Header>

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <SongList
            showTitle={false}
            songs={[]}
          />
        </ScrollView>
      </View>
    );
  }
}
