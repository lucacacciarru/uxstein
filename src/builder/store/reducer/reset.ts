import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { ResetAction } from '../types/reset';
import { INITIAL_STATE } from './rootReducer';

export const resetCase: CaseReducer<BuilderState, ResetAction> = () => {
  return INITIAL_STATE;
};
