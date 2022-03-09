import { createAction } from '@reduxjs/toolkit';
import { BUILDER_ACTION_TYPES } from '../types';
import { DeleteItemPayload } from '../types/deleteItem';

export const deleteItem = createAction<
  DeleteItemPayload,
  BUILDER_ACTION_TYPES.DELETE
>(BUILDER_ACTION_TYPES.DELETE);
