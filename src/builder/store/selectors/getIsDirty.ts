import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getIsDirty = createSelector(
  baseSelector,
  builderState => builderState.isDirty,
);
