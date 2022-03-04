import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getPageSettings = createSelector(
    baseSelector,
    (builderState) => builderState.pageSettings
)