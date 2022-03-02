import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getAuthStatus = createSelector(
    baseSelector,
    (authState) => authState.status
)