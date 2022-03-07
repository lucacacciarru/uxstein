import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getPersonaAllIds = createSelector(
  baseSelector,
  personaState => personaState.personasData.allIds,
);
