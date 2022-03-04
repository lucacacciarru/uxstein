import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { SelectItemPayload } from '../types/selectItem';

export const selectItem = createAction<
    SelectItemPayload,
    BUILDER_ACTION_TYPES.SELECT_ITEM
>(BUILDER_ACTION_TYPES.SELECT_ITEM);

export const clearSelected = createAction<
    undefined,
    BUILDER_ACTION_TYPES.CLEAR_SELECTED
>(BUILDER_ACTION_TYPES.CLEAR_SELECTED);