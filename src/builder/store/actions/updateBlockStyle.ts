import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { UpdateBlockStylePayload } from '../types/updateBlockStyle';

export const updateBlockStyle = createAction<
    UpdateBlockStylePayload,
    BUILDER_ACTION_TYPES.UPDATE_BLOCK_STYLE
>(BUILDER_ACTION_TYPES.UPDATE_BLOCK_STYLE);