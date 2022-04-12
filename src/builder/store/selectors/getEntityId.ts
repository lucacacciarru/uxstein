import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getEntityId = () =>
  createSelector(baseSelector, builderState => builderState.entityId);
