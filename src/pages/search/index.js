import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TextInput, View, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongListComponent, { SongList } from 'components/SongList';

import { connect } from 'react-redux';
import SearchActions from 'store/ducks/search';

import styles from './styles';

class Search extends Component {
  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    searchEmpty: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: SongList.propTypes.songs,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.searchSongs = _.debounce(this.searchSongs, 500);
  }

  state = {
    searchText: '',
  }

  inputChangedText = (searchText) => {
    this.setState(state => ({ ...state, searchText }));

    if (searchText.length > 0) {
      this.searchSongs();
    } else {
      this.props.searchEmpty();
    }
  }

  searchSongs = () => {
    this.props.searchRequest(this.state.searchText);
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
          <SongListComponent
            showTitle={false}
            songs={this.props.search.data}
            loading={this.props.search.loading}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  searchRequest: search => dispatch(SearchActions.searchRequest(search)),
  searchEmpty: () => dispatch(SearchActions.searchEmpty()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
