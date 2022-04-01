import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getPersonaId = () =>
  createSelector(baseSelector, builderState => builderState.personaId);
