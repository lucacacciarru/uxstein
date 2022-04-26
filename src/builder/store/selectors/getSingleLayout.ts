import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getSingleLayout = (id: string) =>
  createSelector(baseSelector, builderState => {
    return builderState.pageSettings.find(item => item.i === id);
  });
