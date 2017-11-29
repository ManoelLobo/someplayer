import { takeLatest } from 'redux-saga/effects';

import { Types as TrendingSongsTypes } from 'store/ducks/trending-songs';
import { Types as RecommendedAlbumsTypes } from 'store/ducks/recommended-albums';

import { getTrendingSongs } from './trending-songs';
import { getRecommendedAlbums } from './recommended-albums';

export default function* root() {
  yield [
    takeLatest(TrendingSongsTypes.TRENDING_REQUEST, getTrendingSongs),
    takeLatest(RecommendedAlbumsTypes.RECOMMENDED_REQUEST, getRecommendedAlbums),
  ];
}
