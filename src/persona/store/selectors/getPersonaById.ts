import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getPersonaById = (id: string) =>
  createSelector(baseSelector, personasState => personasState.data.byId[id]);
