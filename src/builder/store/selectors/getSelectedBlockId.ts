import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getSelectedBlockId = createSelector(
    baseSelector,
    (builderState) => builderState.selectedBlockId
)