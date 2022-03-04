import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { ClearSelectedAction } from '../types/selectItem';

export const clearSelectedCase: CaseReducer<BuilderState, ClearSelectedAction> = (state) => {
    return {
        ...state,
        selectedBlockId: undefined
    }
}