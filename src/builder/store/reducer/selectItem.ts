import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { SelectItemAction } from '../types/selectItem';

export const selectItemCase: CaseReducer<BuilderState, SelectItemAction> = (state, action) => {
    return {
        ...state,
        selectedBlockId: action.payload.itemId
    }
}