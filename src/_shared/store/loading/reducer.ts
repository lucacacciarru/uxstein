import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { LoadingSliceConfig, LoadingState } from './types';

const INITIAL_STATE: LoadingState = {};

const DEFAULT_LOADING_CONFIG: LoadingSliceConfig = {
  loading: 0,
};

export const LOADING_REDUCER_KEY = 'loading';

export const loadingRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(actions.setLoading, (state, { payload }) => {
      const oldState = state[payload.key] || DEFAULT_LOADING_CONFIG;
      return {
        ...state,
        [payload.key]: {
          ...oldState,
          loading: oldState.loading + 1,
        },
      };
    })
    .addCase(actions.unsetLoading, (state, { payload }) => {
      const oldState = state[payload.key] || DEFAULT_LOADING_CONFIG;
      const loadingState = oldState.loading - 1;
      return {
        ...state,
        [payload.key]: {
          ...oldState,
          loading: loadingState < 0 ? 0 : loadingState,
        },
      };
    })
    .addCase(actions.resetLoading, (state, { payload }) => {
      const oldState = state[payload.key] || DEFAULT_LOADING_CONFIG;
      return {
        ...state,
        [payload.key]: {
          ...oldState,
          loading: 0,
        },
      };
    });
});
