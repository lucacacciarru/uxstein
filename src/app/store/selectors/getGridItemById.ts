import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getGridItemById = (id: string) => createSelector(
    baseSelector,
    (builderState) => builderState.byId[id]
)