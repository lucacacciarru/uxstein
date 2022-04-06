import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';

export const resetBuilder = createAction<
    undefined,
    BUILDER_ACTION_TYPES.RESET
>(BUILDER_ACTION_TYPES.RESET);