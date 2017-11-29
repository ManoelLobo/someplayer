import { StyleSheet } from 'react-native';
import { general, metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listItem: {
    marginTop: metrics.baseMargin,
  },

  'listItem-first': {
    marginTop: 0,
  },

  emptyList: {
    color: colors.regular,
    fontSize: fonts.small,
    alignSelf: 'center',
  }
});

export default styles;
