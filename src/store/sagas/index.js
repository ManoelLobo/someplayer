import { takeLatest } from 'redux-saga/effects';

import { Types as TrendingSongsTypes } from 'store/ducks/trending-songs';

import { getTrendingSongs } from './trending-songs';

export default function* root() {
  yield [
    takeLatest(TrendingSongsTypes.TRENDING_REQUEST, getTrendingSongs),
  ];
}
