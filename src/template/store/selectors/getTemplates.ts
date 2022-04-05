import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getTemplates = createSelector(baseSelector, templateState =>
  templateState.data.allIds.map(id => templateState.data.byId[id]),
);
