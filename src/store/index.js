import { combineReducers } from 'redux';

import navReducer from 'navigation/reducer';
import { reducer as trendingSongs } from './ducks/trending-songs';
import { reducer as recommendedAlbums } from './ducks/recommended-albums';
import { reducer as player } from './ducks/player';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    trendingSongs,
    recommendedAlbums,
    player,
  });

  return configureStore(rootReducer, rootSaga);
};
