import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import NavigationTabs from './components/NavigationTabs';
import PlayerComponent, { Player } from './components/Player';

import styles from './styles';

const Footer = props => (
  <View style={styles.footerContainer}>
    { props.player.song && <PlayerComponent /> }
    <NavigationTabs {...props} />
  </View>
);

Footer.propTypes = {
  player: Player.propTypes.player,
};

Footer.defaultProps = {
  player: {},
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps, null)(Footer);
