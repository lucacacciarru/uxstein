import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { SetPayload } from '../types/set';

export const setBuilder = createAction<
    SetPayload,
    BUILDER_ACTION_TYPES.SET
>(BUILDER_ACTION_TYPES.SET);