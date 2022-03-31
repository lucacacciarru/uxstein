import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getTemplates = createSelector(
  baseSelector,
  templateState =>
    Object.values(templateState.data.byId),
);
