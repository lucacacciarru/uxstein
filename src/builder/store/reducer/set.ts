import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { SetAction } from '../types/set';

export const setCase: CaseReducer<BuilderState, SetAction> = (_, action) => {
    return {
        allIds: Object.keys(action.payload.gridItems),
        byId: action.payload.gridItems,
        pageSettings: action.payload.pageSettings,
        personaId: action.payload.personaId,
    }
}