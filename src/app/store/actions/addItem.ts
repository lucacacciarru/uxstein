import { createAction } from '@reduxjs/toolkit';
import { AddItemPayload, ADDITEM_ACTION_TYPES } from '../types/addItem';

export const addItemRequest = createAction<
    AddItemPayload,
    ADDITEM_ACTION_TYPES.REQUEST
>(ADDITEM_ACTION_TYPES.REQUEST);