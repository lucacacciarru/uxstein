import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getPersonas = createSelector(baseSelector, personaState =>
  Object.values(personaState.personasData.byId),
);
