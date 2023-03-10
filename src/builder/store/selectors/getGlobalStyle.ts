import { createSelector } from '@reduxjs/toolkit';
import { baseSelector } from './baseSelector';

export const getGlobalStyle = createSelector(
  baseSelector,
  builderState => builderState.globalStyle,
);
