import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { ResetAction } from '../types/reset';

export const resetCase: CaseReducer<BuilderState, ResetAction> = () => {
    return {
        allIds: [],
        byId: {},
        pageSettings: [],
        personaId: '',
        title: '',
    }
}