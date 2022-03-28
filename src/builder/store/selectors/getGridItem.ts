import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getGridItem = () =>
  createSelector(baseSelector, builderState => builderState.byId);
