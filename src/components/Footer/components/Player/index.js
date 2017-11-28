import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const Player = () => (
  <View style={styles.player}>
    <View style={styles.content}>
      <View style={styles.leftContent}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://pbs.twimg.com/profile_images/648496972933017600/YYeMQYOf.jpg' }}
        />

        <View style={styles.current}>
          <Text style={styles.title}>Música</Text>
          <Text style={styles.description}>Coisa</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="controller-play" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  </View>
);

export default Player;
