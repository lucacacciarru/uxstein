import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { AddItemAction } from '../types/addItem';

export const addItemRequestCase: CaseReducer<BuilderState, AddItemAction> = (state, action) => {
    const id = action.payload.item.layoutSettings.i;
    return {
        ...state,
        allIds: [...state.allIds, id],
        byId: {
            ...state.byId,
            [id]: action.payload.item.gridItemSettings,
        },
        pageSettings: action.payload.pageSettings,
    }
}