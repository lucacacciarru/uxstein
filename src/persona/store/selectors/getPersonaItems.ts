import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getPersonaItems = createSelector(
  baseSelector,
  personaState => personaState.personas,
);
