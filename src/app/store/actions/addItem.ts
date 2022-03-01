import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { AddItemPayload } from '../types/addItem';

export const addItemRequest = createAction<
    AddItemPayload,
    BUILDER_ACTION_TYPES.ADD
>(BUILDER_ACTION_TYPES.ADD);