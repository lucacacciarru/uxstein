import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getUserProfile = createSelector(
    baseSelector,
    (authState) => authState.profile
)