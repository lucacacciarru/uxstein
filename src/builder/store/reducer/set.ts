import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { SetAction } from '../types/set';

export const setCase: CaseReducer<BuilderState, SetAction> = (_, action) => {
  return {
    allIds: Object.keys(action.payload.gridItems),
    byId: action.payload.gridItems,
    pageSettings: action.payload.pageSettings,
    entityId: action.payload.entityId,
    entityType: action.payload.entityType,
    title: action.payload.title,
    globalStyle: action.payload.globalStyle,
  };
};
