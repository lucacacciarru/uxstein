import { createSelector } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { LOADING_REDUCER_KEY } from './reducer';

function getLoadingState(state: DefaultRootState) {
  return state[LOADING_REDUCER_KEY];
}

export const getIsLoading = createSelector(
  getLoadingState,
  (_: DefaultRootState, key: string) => key,
  (state, key) => {
    return state[key] && state[key].loading > 0;
  },
);

export const getIsIdle = createSelector(
  getLoadingState,
  (_: DefaultRootState, key: string) => key,
  (state, key) => {
    return !state[key] || state[key].loading === 0;
  },
);
