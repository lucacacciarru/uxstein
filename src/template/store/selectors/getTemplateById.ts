import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelectors';

export const getTemplateById = (id: string) => createSelector(
    baseSelector,
    (templateState) => templateState.data.byId[id]
)