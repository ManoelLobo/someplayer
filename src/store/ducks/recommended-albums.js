import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  recommendedRequest: null,
  recommendedSuccess: ['data'],
  recommendedFailure: null,
});

export { Types };
export default Creators;

// Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: null,
});

export const failure = () => ({
  data: [],
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECOMMENDED_REQUEST]: request,
  [Types.RECOMMENDED_SUCCESS]: success,
  [Types.RECOMMENDED_FAILURE]: failure,
});
