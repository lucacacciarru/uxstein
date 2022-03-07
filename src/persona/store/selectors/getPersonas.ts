import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getPersonas = createSelector(baseSelector, personaState =>
  personaState.data.allIds.map(id => personaState.data.byId[id]),
);
