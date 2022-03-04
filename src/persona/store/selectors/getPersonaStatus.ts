import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getPersonaStatus = createSelector(
  baseSelector,
  personaState => personaState.status,
);
