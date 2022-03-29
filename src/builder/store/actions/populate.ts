import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { PopulateBuilderPayload } from '../types/populate';

export const populateBuilderTrigger = createAction<
    PopulateBuilderPayload,
    BUILDER_ACTION_TYPES.POPULATE
>(BUILDER_ACTION_TYPES.POPULATE);