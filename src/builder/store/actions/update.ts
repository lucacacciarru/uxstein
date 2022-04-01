import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { UpdatePayload } from '../types/update';

export const updateBuilder = createAction<
    UpdatePayload,
    BUILDER_ACTION_TYPES.UPDATE
>(BUILDER_ACTION_TYPES.UPDATE);